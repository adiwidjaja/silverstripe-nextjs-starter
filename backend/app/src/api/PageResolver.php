<?php

namespace App\Api;

use App\Models\Project;
use GraphQL\Type\Definition\ResolveInfo;
use Page;
use PageController;
use SilverStripe\Control\Controller;
use SilverStripe\Control\Director;
use SilverStripe\Control\HTTPRequestBuilder;
use SilverStripe\GraphQL\OperationResolver;

class PageResolver implements OperationResolver
{
    public function resolve($object, array $args, $context, ResolveInfo $info)
    {
        $page = Page::get()->filter("UrlSegment", $args['UrlSegment'])->first();
        Director::set_current_page($page);
        return $page;
    }
}
