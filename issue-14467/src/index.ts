declare const I18n: any;

export async function loadLocale() {
    await I18n.use().init();
}
