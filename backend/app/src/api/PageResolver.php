<?php

namespace App\Api;

use App\Models\Project;
use GraphQL\Type\Definition\ResolveInfo;
use Page;
use PageController;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Control\Controller;
use SilverStripe\Control\Director;
use SilverStripe\Control\HTTPRequestBuilder;
use SilverStripe\GraphQL\OperationResolver;
use SilverStripe\View\Parsers\URLSegmentFilter;

class PageResolver implements OperationResolver
{
    public function lookupPage($urlSegment, $parentId=0) {
        $filter = URLSegmentFilter::create();

        // look for a page with this URLSegment
        $child = SiteTree::get()->filter([
            'ParentID' => $parentId,
            // url encode unless it's multibyte (already pre-encoded in the database)
            'URLSegment' => $filter->getAllowMultibyte() ? $urlSegment : rawurlencode($urlSegment),
        ])->first();
        return $child;
    }

    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $url = $args['UrlSegment'];
        if($url == "")
            $url = "home";

        $urlSegments = explode("/", $url);

        $lastParentId = 0;
        foreach($urlSegments as $urlSegment) {
            $page = $this->lookupPage($urlSegment, $lastParentId);
            $lastParentId = $page->ID;
        }

//        Director::set_current_page($page);
        return $page;
    }
}
