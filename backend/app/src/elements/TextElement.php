<?php
namespace App\Elements;

use DNADesign\Elemental\Models\BaseElement;

class TextElement extends BaseElement {

    private static $db = [
        "Text" => "HTMLText"
    ];

    private static $table_name = "TextElement";
    private static $icon = 'font-icon-block-content';

    protected function provideBlockSchema()
    {
        $blockSchema = parent::provideBlockSchema();
        $blockSchema['content'] = $this->dbObject("Text")->Summary(20);
        return $blockSchema;
    }

    public function getType()
    {
        return _t(__CLASS__ . '.BlockType', 'Text');
    }

}
