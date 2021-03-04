import axios from 'axios'
import Vue from 'vue'

const Base_url = 'http://127.0.0.1:8888/api/private/v1/'

function  ajax(url,method='GET',data={}) {
      return new Promise(resolve => {
        axios({
          url:Base_url+url,
          method,
          data
        }).then(res=>{



          resolve(res)
        }).catch(error=>{

        })
      })
}

export default ajax
