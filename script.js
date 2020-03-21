'use strict';

const props = {

}

VK.init({
    apiId: 7368594
});

VK.Auth.login((response) => {
    if (response.session) {
        console.log('success');
    }
});