import {Injectable} from '@angular/core';
import {LightPatientDto} from '../../../../services/models/light-patient-dto';
import {ContactPersonDto} from '../../../../services/models/contact-person-dto';
import {AddressDto} from '../../../../services/models/address-dto';
import {ConstantDto} from '../../../../services/models/constant-dto';
import {AllergyDto} from '../../../../services/models/allergy-dto';
import {MedicalBackgroundDto} from '../../../../services/models/medical-background-dto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  private _patient: LightPatientDto = {
    nationalId: null,
    middleName: null,
    lastname: null,
    firstName: null,
    email: null,
    phoneNumber: null,
    sexe: null,
    birthdate: null,
    birthPlace: null,
  }

  get patient(): LightPatientDto {
    return this._patient;
  }

  set patient(value: LightPatientDto) {
    this._patient = value;
  }

  private _constants: Array<ConstantDto> = [];

  get constants(): Array<ConstantDto> {
    return this._constants;
  }

  set constants(value: Array<ConstantDto>) {
    this._constants = value;
  }

  private _allergies: Array<AllergyDto> = [];

  get allergies(): Array<AllergyDto> {
    return this._allergies;
  }

  set allergies(value: Array<AllergyDto>) {
    this._allergies = value;
  }

  private _medicalBackground: Array<MedicalBackgroundDto> = [];

  get medicalBackground(): Array<MedicalBackgroundDto> {
    return this._medicalBackground;
  }

  set medicalBackground(value: Array<MedicalBackgroundDto>) {
    this._medicalBackground = value;
  }

  private _contactPerson: ContactPersonDto = {};

  get contactPerson(): ContactPersonDto {
    return this._contactPerson;
  }

  set contactPerson(value: ContactPersonDto) {
    this._contactPerson = value;
  }

  private _address: AddressDto = {
    street: null
  };

  get address(): AddressDto {
    return this._address;
  }

  set address(value: AddressDto) {
    this._address = value;
  }

  getPatientId() {
    return this._patient.id;
  }

  clear() {
    this.patient = {
      nationalId: null,
      middleName: null,
      lastname: null,
      firstName: null,
      email: null,
      phoneNumber: null,
      sexe: null,
      birthdate: null,
      birthPlace: null,
    };
    this.contactPerson = {};
    this.address = {
      street: null
    };
    this.constants = [];
    this.allergies = [];
    this.medicalBackground = [];
  }
}
