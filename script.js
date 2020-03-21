VK.init({
    apiId: 7368594
});

VK.Auth.login((res) => {
    console.log(res.session);
    console.log(res.status);
});