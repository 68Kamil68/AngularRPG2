export enum RaceOptions {
    Yeti = "Yeti",
    Gonz = "Gonz",
    Fudi = "Foodie",
    Bednar = "Bednar"
}

export enum ClassOptions {
    alkoholik = "Alkoholik",
    raper = "Raper",
    programista = "Programista",
    kulturysta = "Kulturysta"
}

export enum GenderOptions {
    male = "Male",
    female = 'Female',
}

export const CharacterOptions = {
    races: [
        RaceOptions.Yeti,
        RaceOptions.Gonz,
        RaceOptions.Fudi,
        RaceOptions.Bednar
    ] ,
    classes: [
        ClassOptions.alkoholik,
        ClassOptions.raper,
        ClassOptions.programista,
        ClassOptions.kulturysta
    ],
    genders: [
        GenderOptions.male,
        GenderOptions.female
    ]
}