'use strict';

VK.init({
    apiId: 7368594
});

btn.addEventListener('click', () => {
    const newLocal = 1 << 7;
    VK.Auth.login((response) => {
        console.log(response);
        if (response.session) {
            VK.Api.call('photos.getAll', { owner_id: 238741249, v: '5.103' }, (response) => {
                console.log(response);
            });
        }
    });
});