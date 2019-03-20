import { GETITEMS_HOT } from '../types/movie'
import { createAction } from 'redux-actions'
import wepy from 'wepy'

export const getitems_hot = createAction(GETITEMS_HOT, async (payload) => {
  wx.showLoading()
  return await wepy.request({
              url:'http://m.maoyan.com/ajax/movieOnInfoList?token=',
              header: {
                  'content-type': 'application/json'
              }
          }).then((res)=>{
            wx.hideLoading()
            res.data.movieList.forEach(item => {
              item.img=item.img.replace(/w.h/,"128.180")
            });
            return res.data.movieList
          })
    
})