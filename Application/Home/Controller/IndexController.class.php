<?php
namespace Home\Controller;
use Think\Controller\RestController;
class IndexController extends RestController {
    public function index(){
        $m = M('News');
        $rs = $m->select();
        $this->response($rs, 'json');
    }

    public function getNewsById() {
        $m = M('News');
        $rs = $m->find(I('get.id'));
        $this->response($rs, 'json');
    }

    public function editNews() {
        $data = array(
            "title" => I('param.title'),
            "content" => I("param.content")
        );
        dump($data);
    }
}