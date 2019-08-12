import axios from 'axios'
const host="http://localhost:8666";
class  Basenet{
    finduser(parm){
      axios.get(host+'/findUser', {
        params: {
          id: "123"
        }
        // 指定允许其他域名访问
        //header("Access-Control-Allow-Origin:*"),
      }).then(function (response) {
        alert(response.data)
          console.log(response);
        }).catch(function (error) {
          console.log(error.message);
        });
    }

    login(){

    }
}

export default new Basenet();
