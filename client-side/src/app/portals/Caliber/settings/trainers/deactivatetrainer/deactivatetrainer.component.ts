import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core/';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { TrainerService } from '../../../../../hydra-client/services/trainer/trainer.service';
import { setInterval } from 'timers';
import { HydraTrainer } from '../../../../../hydra-client/entities/HydraTrainer';


@Component({
    selector: 'app-deactivatetrainer',
    templateUrl: './deactivatetrainer.component.html',
    styleUrls: ['./deactivatetrainer.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class DeactivateTrainerComponent implements OnInit {
    @Input()
    trainer: HydraTrainer;

    constructor(private modalService: NgbModal, private ts: TrainerService) {
    }

    ngOnInit() {

    }
    /**
     * open modal with prompt
     *
     * @param {any} content
     * @memberof DeactivateTrainerComponent
     */
    showModal(content) {
        this.modalService.open(content);
    }
    /**
     * deactiave trainer by setting role to INACTIVE
     *
     * @memberof DeactivateTrainerComponent
     */
    deactivateTrainer() {
        this.trainer.role = 'INACTIVE';
        this.ts.update(this.trainer).subscribe((resp) => {
            this.ts.fetchAll();
        });
    }
}
