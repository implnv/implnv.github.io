'use strict';

const props = {

}

VK.init({
    apiId: 7368594
});

VK.Auth.login((response) => {
    if (response.session) {
        VK.Api.call('friends.get', { user_id: 238741249, oreder: 'name', v: "5.8" }, (response) => {
            console.log(response);
        });
    }
}, 2);