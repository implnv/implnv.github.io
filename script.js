'use strict';

VK.init({
    apiId: 7368594
});

btn.addEventListener('click', () => {
    VK.Auth.login((response) => {
        if (response.session) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://login.vk.com/?act=openapi&oauth=1&aid=7368594&location=implnv.github.io&new=1');
            xhr.send();
            console.log(xhr.response);
            
            // VK.Api.call('fave.get', { item_type: 'post', v: '5.103' }, (response) => {
            //     console.log(response);
            // });
        }
    });
});