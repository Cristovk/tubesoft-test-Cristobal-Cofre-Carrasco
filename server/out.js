import ex from './back.js'

async function main(){
    await ex.listen(4000);
    console.log('Server on port 4000')
};

main();