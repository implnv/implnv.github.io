'use strict';

VK.init({
    apiId: 7368594
});

btn.addEventListener('click', () => {
    VK.Auth.login((response) => {
        if (response.session) {
            VK.Api.call('newsfeed.get', { filters: 'post', v: '5.103' }, (response) => {
                console.log(response);
            });
        }
    }, 8192);
});