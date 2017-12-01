
import jsonp from 'common/js/jsonp'
import {commonParams, options} from 'src/api/config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {notice: 0, platform: 'h5', needNewCode: 1})
  return jsonp(url, data, options)
}

