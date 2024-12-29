import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AnnouncementListResponseModelDataInner,
  AnnouncementService
} from 'libs/openapi/src';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { CreateAnnouncementDialogComponent } from '../create-announcement-dialog/create-announcement-dialog.component';
import { OptionType } from '@tmf/libs-shared/components';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent implements OnInit {
  private dialog = inject(Dialog);
  private announcementService = inject(AnnouncementService);

  courseOptions: OptionType[] = [];
  targetOptions: OptionType[] = [];

  announcementList: AnnouncementListResponseModelDataInner[] = [];

  ngOnInit() {
    this.initOptions();
    this.getList();
  }

  initOptions() {
    this.announcementService.apiAnnouncementInitGet().subscribe((res) => {
      this.courseOptions = res.data.courseOptions.map((course) => ({
        label: course.label,
        value: course.value
      }));
      this.targetOptions = res.data.targetOptions.map((target) => ({
        label: target.label || '',
        value: target.value
      }));
    });
  }

  getList() {
    this.announcementService.apiAnnouncementListGet().subscribe((res) => {
      this.announcementList = res.data;
    });
  }

  getTargetText(target: string) {
    const targetOption = this.targetOptions.find(
      (option) => option.value === target
    );
    return targetOption ? targetOption.label : '';
  }

  create() {
    this.dialog
      .open(CreateAnnouncementDialogComponent, {
        data: {
          courseOptions: this.courseOptions,
          targetOptions: this.targetOptions
        }
      })
      .closed.subscribe(() => {
        this.getList();
      });
  }
}
