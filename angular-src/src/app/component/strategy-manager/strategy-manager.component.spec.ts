import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StrategyManagerComponent} from './strategy-manager.component';

describe('StrategyManagerComponent', () => {
    let component: StrategyManagerComponent;
    let fixture: ComponentFixture<StrategyManagerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StrategyManagerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StrategyManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
