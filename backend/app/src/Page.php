<?php

namespace {

    use SilverStripe\CMS\Model\SiteTree;
    use SilverStripe\Control\Director;

    class Page extends SiteTree
    {
        private static $db = [];

        private static $has_one = [];

        public function Elements() {
            return $this->ElementalArea()->Elements();
        }

        public function Menu() {
            return PageController::singleton()->getMenu(1);
        }

        public function LinkOrSection() {

            parent::LinkOrSection();
        }
    }
}
