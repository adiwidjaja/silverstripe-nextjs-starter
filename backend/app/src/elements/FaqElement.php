<?php
namespace App\Elements;

use DNADesign\Elemental\Models\BaseElement;
use SilverStripe\Assets\Image;

class FaqElement extends BaseElement {

    private static $db = [
        "Description" => "HTMLText",
        "Text" => "HTMLText"
    ];

    private static $has_one = [
        "Image" => Image::class,
    ];

    private static $owns = [
        "Image",
    ];

    private static $table_name = "FaqElement";
    private static $icon = 'font-icon-block-promo-3';

    protected function provideBlockSchema()
    {
        $blockSchema = parent::provideBlockSchema();
        $blockSchema['content'] = $this->dbObject("Text")->Summary(20);
        return $blockSchema;
    }

    public function getType()
    {
        return _t(__CLASS__ . '.BlockType', 'FAQ');
    }

    public function getContentFields()
    {
        $fields = parent::getContentFields();
        $fields["Image"] = $this->getImageUrl();
        return $fields;
    }

    public function getImageUrl() {
        $image = $this->Image();
        if($image->exists())
            return $image->Fit(400,300)->getAbsoluteURL();
    }

}
