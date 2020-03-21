'use strict';

VK.init({
    apiId: 7368594
});

VK.Auth.login((response) => {
    if (response.session) {
        VK.Api.call('favse.get', { item_type: "post", v: "5.103" }, (response) => {
            console.log(response);
        });
    }
});