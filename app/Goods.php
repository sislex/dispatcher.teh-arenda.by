<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Goods extends Model
{
    protected $table = 'good';

    public function getUserIdsByGoodIds($goodIds){
        $result = $this->whereIn('id', $goodIds)->distinct('user_id')->get(['user_id']);
        $userIds = [];
        if($result->count()){
            foreach($result as $value){$userIds[] = $value->user_id;}
        }
        return $userIds;
    }
}