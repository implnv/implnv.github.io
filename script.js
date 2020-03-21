'use strict';

VK.init({
    apiId: 7368594
});

btn.addEventListener('click', () => {
    VK.Auth.login((response) => {
        console.log(response);
        if (response.session) {
            VK.Api.call('photos.getAll', { owner_id: 238741249, v: '5.103' }, (response) => {
                console.log(response);
            });
        }
    }, 4);
});