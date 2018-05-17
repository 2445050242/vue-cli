#### 公用数据的请求获取
* available_express   可用快递
* region   获取所有地区信息
* expresssetting  常用快递设置
* address  常用寄件人设置
* epscompany  所有快递公司信息


#####举个例子，引入getAvailableExpress这个方法：

> import {getAvailableExpress} from 'api/global'

 然后页面直接调用这个``getAvailableExpress()``方法,
 将执行的结果用数组存储`` let arr = getAvailableExpress() ``  ,再用获取数组数据方法得到你想要的数据

> 当用户进行快递公司管理时，先清这session数据``clearAvailableExpress()``，让其再次请求``getAvailableExpress()``

> 同理，编辑常用快递设置清除session数据``clearExpressSetting()``,然后再次请求``getExpressSetting``
