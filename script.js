'use strict';

const props = {

}

VK.init({
    apiId: 7368594
});

VK.Auth.login((response) => {
    if (response.session) {
        VK.Api.call('friends.getLists', { user_id: 238741249, return_system: 1, v: "5.73" }, (response) => {
            console.log(response);
        });
    }
}, 2);