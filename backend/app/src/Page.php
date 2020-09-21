<?php

namespace {

    use SilverStripe\CMS\Model\RedirectorPage;
    use SilverStripe\CMS\Model\SiteTree;
    use SilverStripe\Control\Director;
    use SilverStripe\Core\Environment;

    class Page extends SiteTree
    {
        private static $db = [];

        private static $has_one = [];

        public function FrontendLink($action=null) {
            if($this->ClassName == RedirectorPage::class) {
                $link = $this->redirectionLink();
            } else {
                $link = $this->RelativeLink($action);
            }
            return str_replace(Director::baseURL(), "", $link);
        }

        public function Elements() {
            return $this->ElementalArea()->Elements();
        }

        public function Menu() {
            return PageController::singleton()->getMenu(1);
        }

        public function SiteTitle() {
            return $this->getSiteConfig()->Title;
        }

        public function PreviewLink($action = null) {
            $link = $this->FrontendLink($action);
            $slash = substr($link, 0, 1) == "/" ? "" : "/";
            return Environment::getEnv('FRONTEND_URL').$slash.$link;
        }
    }
}
