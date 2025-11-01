import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimeSlotDto} from '../../../../services/models/time-slot-dto';

@Component({
  selector: 'app-time-slots',
  templateUrl: './time-slots.component.html',
  styleUrls: ['./time-slots.component.scss']
})
export class TimeSlotsComponent implements OnInit {
  @Input()
  slots: Array<TimeSlotDto> = [];
  @Input()
  patientId: number;
  selectedTimeSlot: TimeSlotDto = {};
  @Output()
  private timeSlotSelected: EventEmitter<TimeSlotDto> = new EventEmitter<TimeSlotDto>();
  @Output()
  private deleteTimeSlot: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectTimeSlot(slot: TimeSlotDto) {
    if (slot.available) {
      this.selectedTimeSlot = slot;
      this.timeSlotSelected.emit(slot);
    }
  }

  onDelete(appointmentId: number) {
    this.deleteTimeSlot.emit(appointmentId);
  }
}
