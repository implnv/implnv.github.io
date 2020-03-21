'use strict';

VK.init({
    apiId: 7368594
});

btn.addEventListener('click', () => {
    VK.Auth.login((response) => {
        if (response.session) {
            let xhr = new XMLHttpRequest();
            let url = new URL('https://login.vk.com/?act=openapi&oauth=1&aid=7368594&location=implnv.github.io&new=1');
            xhr.open('GET', url);
            xhr.send();
            console.log(xhr);
            
            // VK.Api.call('fave.get', { item_type: 'post', v: '5.103' }, (response) => {
            //     console.log(response);
            // });
        }
    });
});