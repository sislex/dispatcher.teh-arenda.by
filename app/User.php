<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getUsersByCategoriesId($categoriesId){
        $categoriesId = intval($categoriesId);
        if($categoriesId>0){
            $goodIds = (new Good_Category())->getGoodIdsByCategoryId($categoriesId);
            $userIds = (new Goods())->getUserIdsByGoodIds($goodIds);
            $usersInfo = (new User_Info())->getUserinfoByUserIds($userIds);
            $users = $this->whereIn('id', $userIds)->distinct('site')->get(['id', 'site', 'email']);
        }

        $result = [];
        if($users->count()){
            $arr = $users->toArray();
            foreach($arr as $value){
                if(isset($usersInfo[$value['id']])){
                    $resultArray = array_merge ($value, $usersInfo[$value['id']]);
                    $result[$value['id']] = $resultArray;
                }

            }
        }

        return $result;
    }
}
