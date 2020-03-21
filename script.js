'use strict';

VK.init({
    apiId: 7368594
});

btn.addEventListener('click', () => {
    VK.Auth.login((response) => {
        if (response.session) {
            VK.Api.call('fave.get', { item_type: 'post', v: '5.103' }, (response) => {
                console.log(response);
            });
        }
    });
});