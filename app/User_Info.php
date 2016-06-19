<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_Info extends Model
{
    protected $table = 'user_info';

    public function getUserinfoByUserIds($goodIds){
        $result = $this->whereIn('user_id', $goodIds)
            ->distinct('user_id')
            ->get(['user_id', 'name', 'address', 'site', 'phone', 'email']);
        $usersInfo = [];
        if($result->count()){
            $arr = $result->toArray();
            foreach($arr as $value){
                $usersInfo[$value['user_id']] = $value;
            }
        }
        return $usersInfo;
    }
}