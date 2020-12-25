export interface Holiday {
    ActualHoliday: string;
    ObservedHoliday: string;
}

export interface Identifier {
    Id: string;
    IdType: string;
}

export interface HolidayRootObject {
    Active: string;
    Holidays: Holiday[];
    Identifiers: Identifier[];
    MT_Database: string;
    MT_Dictionary: string;
    MT_DocumentName: string;
    MT_ExportTime: Date;
    MT_HCIS: string;
    MT_HCISInt: string;
    MT_ModifiedTime: Date;
    MT_OID: string;
    MT_Release: string;
    MT_ReleaseInt: string;
    MT_Universe: string;
    Mnemonic: string;
    Name: string;
}

/*
export interface MisHoliday {
resourceType?: string;
versionId?: string;
project?: string;
mtid?: string;
active?: string;
name?: string;
mnemonic?: string;
holidayOccurrence?: string;
mtOid?: string;
mtHCIS?: string;
mtModifiedTime?: string;
mtRelease?: string;
mtUniverse?: string;
mtDatabase?: string;
mtDictionary?: string;
contentType?: string;
system?: string;
code?: string;
status?: string;
}

*/







/* DC-MisHoliday - SubCollection: data - JSON example
{
"Active": "Y",
"Holidays": [{
    "ActualHoliday": "20071225",
    "ObservedHoliday": "20071225"
},
{
    "ActualHoliday": "20081225",
    "ObservedHoliday": "20081225"
},
{
    "ActualHoliday": "20091225",
    "ObservedHoliday": "20091225"
},
{
    "ActualHoliday": "20101225",
    "ObservedHoliday": "20101225"
}
],
"Identifiers": [{
    "Id": "CHR",
    "IdType": "M"
},
{
    "Id": "Christmas Day",
    "IdType": "N"
}
],
"MT_Database": "MIS",
"MT_Dictionary": "MisHoliday",
"MT_DocumentName": "CHR~01MTX~02DEV.STNDS~03MIS",
"MT_ExportTime": "2020-12-07T11:16:44-05:00",
"MT_HCIS": "DEV-STNDS",
"MT_HCISInt": "DEV.STNDS",
"MT_ModifiedTime": "2020-09-03T10:59:36-04:00",
"MT_OID": "CHR",
"MT_Release": "Expanse_2-2",
"MT_ReleaseInt": "Expanse 2.2",
"MT_Universe": "MTX",
"Mnemonic": "CHR",
"Name": "Christmas Day"
}
*/