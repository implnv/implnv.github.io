VK.init({
    apiId: 7368594
});

VK.Auth.login(() => {
    console.log(session);
    console.log(status);
});