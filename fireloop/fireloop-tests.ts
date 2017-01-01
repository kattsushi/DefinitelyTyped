/// <reference path="index.d.ts" />

class User {
    constructor( public model: ModelConstructor) { };

    myRemote(id: any) {
        this.model.find({
            fields: {},
            limit: 1,
            where : { },
        }, (data) => {
            console.log(data);
        });

        this.model.on('changed', () => {
            console.log('success');
        });

    }
}
