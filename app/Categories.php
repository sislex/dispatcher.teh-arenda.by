<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'category';

    public function getCategories(){
        $categories = Categories::get(['id', 'category_id', 'name']);

        $arr = $this->getCategoriesArray($categories);

        return $arr;
    }

    private function getCategoriesArray($arr, $category_id = 0){
        $newArr = [];

        foreach($arr as $key=>$value){
            if($value['category_id'] == $category_id){
                $children = $this->getCategoriesArray($arr, $value['id']);
                if(is_array($children) && count($children)){
                    $value['children'] = $children;
                }
                $newArr[] = $value;
            }
        }

        return $newArr;
    }

}