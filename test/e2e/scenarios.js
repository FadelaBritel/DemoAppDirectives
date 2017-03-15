'use strict';

describe('event registration app', function(){
    describe('event page', function(){
        beforeEach(function(){
            browser.get('http://localhost:8000/events');
        })

        it('should have the correct title and first event', function(){
            var list=element.all(by.repeater('event in events'));
            expect(list.count()).toEqual(5);
            var titleElement=element(by.binding('event.name'));
            expect(titleElement.getText()).toEqual('Angular Boot Camp');
        })
    })
})