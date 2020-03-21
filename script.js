'use strict';

VK.init({
    apiId: 7368594
});

btn.addEventListener('click', () => {
    VK.Auth.login((response) => {
        console.log(access_token);
        console.log(response.access_token);
        if (response.session) {
            // VK.Api.call('fave.get', { item_type: 'post', v: '5.103' }, (response) => {
            //     console.log(response);
            // });
        }
    });
});