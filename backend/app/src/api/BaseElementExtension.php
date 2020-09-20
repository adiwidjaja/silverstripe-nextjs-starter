<?php

namespace App\Api;

use SilverStripe\GraphQL\Scaffolding\StaticSchema;
use SilverStripe\ORM\DataExtension;
use SilverStripe\ORM\DataObject;

class BaseElementExtension extends DataExtension {

    public function getContentFieldsJson() {
        return json_encode($this->owner->getContentFields());
    }

    public function getContentFields() {
        $object = $this->owner;

        // Simplified copy from silverstripe-gatsby
        $schema = DataObject::getSchema();
        $fields = $schema->databaseFields(get_class($object));
        $json = [];
        $omitted = ['ID', 'Created', 'LastEdited', 'ClassName', 'Title', 'Version', 'ParentID', 'ExtraClass', 'Sort', 'Style'];
        foreach ($fields as $field => $spec) {
            $fieldName = $field; //static::fieldName($field);
            if (in_array($fieldName, $omitted)) {
                continue;
            }

            $val = $object->$field;
            if ($val === null) {
                $obj = $object->obj($field);
                if ($obj) {
                    $val = $obj->nullValue();
                }
                // Force fallback to string
                if ($val === null) {
                    $val = (string) $val;
                }
            }
            $json[$fieldName] = $val;
        }

        return $json;
    }
}
