import { baseUrl } from './env';
import axios from 'axios';


export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

    axios.defaults.withCredentials = true;

    try {
        if (type == 'GET') {
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            })

            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            let requestConfig = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            const response =  await axios.get(url, requestConfig);
            console.log(response);
            return response.data;
        } else {
            let requestConfig = {
                url,
                method: type,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data,
            }
            const response = await axios.request(url, requestConfig);
            console.log(response);
            return response.data;
        }
    } catch (err) {
        console.error(err);
    }
}



    // if (window.fetch && method == 'fetch') {
    //     console.log('window.fetch');
	// 	let requestConfig = {
	// 		credentials: 'include',
	// 		method: type,
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		mode: "cors",
	// 		// cache: "force-cache"
    //         cache: "no-cache"
	// 	}

	// 	if (type == 'POST') {
	// 		Object.defineProperty(requestConfig, 'body', {
	// 			value: JSON.stringify(data)
	// 		})
	// 	}

	// 	try {
	// 		const response = await fetch(url, requestConfig);
	// 		const responseJson = await response.json();
	// 		return responseJson
	// 	} catch (error) {
	// 		throw new Error(error)
	// 	}
    // } else {
    //     console.log('not window.fetch');
	// 	return new Promise((resolve, reject) => {
	// 		let requestObj;
	// 		if (window.XMLHttpRequest) {
	// 			requestObj = new XMLHttpRequest();
	// 		} else {
	// 			requestObj = new ActiveXObject;
	// 		}

	// 		let sendData = '';
	// 		if (type == 'POST') {
	// 			sendData = JSON.stringify(data);
	// 		}

	// 		requestObj.open(type, url, true);
	// 		requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// 		requestObj.send(sendData);

	// 		requestObj.onreadystatechange = () => {
	// 			if (requestObj.readyState == 4) {
	// 				if (requestObj.status == 200) {
	// 					let obj = requestObj.response
	// 					if (typeof obj !== 'object') {
	// 						obj = JSON.parse(obj);
	// 					}
	// 					resolve(obj)
	// 				} else {
	// 					reject(requestObj)
	// 				}
	// 			}
	// 		}
	// 	})
	// }
// }
