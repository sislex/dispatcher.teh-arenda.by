<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Good_Category extends Model
{
    protected $table = 'good_category';

    public function getGoodIdsByCategoryId($categoriesId){
        $result = $this->where('category_id', $categoriesId)->distinct('good_id')->get(['good_id']);
        $goodIds = [];
        if($result->count()){
            foreach($result as $value){$goodIds[] = $value->good_id;}
        }
        return $goodIds;
    }
}