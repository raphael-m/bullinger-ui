export default {
    card: {
        loading: 'Karteikarte wird geladen...',
        original_title: 'Originale Karteikarte',
        original_intro: 'Zum Vergrössern verwenden Sie die Steuerelemente oder das Mausrad.',
        digital_title: 'Digitale Karteikarte',
        reviews: 'Rezension | Rezensionen',
        state: {
            open: 'offen',
            unclear: 'unklar',
            done: 'abgeschlossen',
            invalid: 'ungültig'
        },
        digital_intro: 'Prüfen Sie die angezeigten Werte mit den Angaben auf der originalen Karteikarte.'
    },
    editor: {
        date: {
            title: 'Datum',
            year: 'Jahr',
            year_tip: 'Vierstellige Jahreszahl ohne Klammern',
            year_b: 'Jahr B',
            year_b_tip: 'Sofern Anfangs- und Enddaten angegeben sind: Zweite Jahreszahl (vierstellig) ohne Klammern',
            month: 'Monat',
            month_tip: 'Monatsname',
            month_b: 'Monat B',
            month_b_tip: 'Sofern Anfangs- und Enddaten angegeben sind: Zweiter Monatsname',
            day: 'Tag',
            day_tip: 'Zweistellige Datumsangabe',
            day_b: 'Tag B',
            day_b_tip: 'Sofern Anfangs- und Enddaten angegeben sind: Zweite Datumsangabe (zweistellig)',
            remarks: 'Bemerkung (Datum)',
            remarks_tip: 'Steht das Datum auf der Karteikarte in Klammern oder ist mit einer lat. Abkürzung wie "s.d." oder "s.a." versehen, tragen Sie hier "Datum unsicher" ein'
        },
        sender: {
            title: 'Absender',
            lastname: 'Nachname',
            lastname_tip: 'Nachname ohne Klammern; falls mehrere Absender angegeben sind: Nur Nachname des ersten Absenders',
            firstname: 'Vorname',
            firstname_tip: 'Vorname(n) ohne Klammern; falls mehrere Absender angegeben sind: Nur Vorname(n) des ersten Absenders',
            location: 'Ort',
            location_tip: 'Ortsname ohne Klammern',
            verified: 'Verifiziert?',
            not_verified: 'Nicht verifiziert',
            not_verified_tip: 'Feld ankreuzen, sofern eine Angabe zum Absender in Klammern steht',
            remarks: 'Bemerkung (Absender)',
            remarks_tip: 'Stehen mehrere Absender auf der Karteikarte, tragen Sie hier "Mehrere Absender" ein.<br>Haben Sie Schreibvarianten festgestellt oder sind Sie unsicher, ob ein Schreibfehler vorliegt, tragen Sie die entsprechende Bemerkung ein und setzen den Status auf "Unklar".'
        },
        receiver: {
            title: 'Empfänger',
            lastname: 'Nachname',
            lastname_tip: 'Nachname ohne Klammern; falls mehrere Empfänger angegeben sind: Nur Nachname des ersten Empfängers',
            firstname: 'Vorname',
            firstname_tip: 'Vorname(n) ohne Klammern; falls mehrere Empfänger angegeben sind: Nur Vorname(n) des ersten Empfängers',
            location: 'Ort',
            location_tip: 'Ortsname ohne Klammern',
            verified: 'Verifiziert?',
            not_verified: 'Nicht verifiziert',
            not_verified_tip: 'Feld ankreuzen, sofern eine Angabe zum Empfänger in Klammern steht',
            remarks: 'Bemerkung (Empfänger)',
            remarks_tip: 'Stehen mehrere Empfänger auf der Karteikarte, tragen Sie hier "Mehrere Empfänger" ein.<br>Haben Sie Schreibvarianten festgestellt oder sind Sie unsicher, ob ein Schreibfehler vorliegt, tragen Sie die entsprechende Bemerkung ein und setzen den Status auf "Unklar".'
        },
        autograph: {
            title: 'Autograph',
            location: 'Standort',
            location_tip: 'Standort ohne Komma<br>Die meisten Briefe stehen entweder im Staatsarchiv Zürich oder der Zentralbibliothek Zürich (ZZB). Diese Standorte bitte jeweils wie folgt eintragen: Zürich StA oder Zürich ZB',
            signature: 'Signatur',
            signature_tip: 'Buchstabenfolgen sind mit Leerschlägen zu trennen, Zahlen mit Kommas (für Beispiele s. FAQ)',
            remarks: 'Bemerkung (Autograph)',
            remarks_tip: 'Sind Sie unsicher, ob Sie die Angaben richtig entziffert haben, tragen Sie hier bitte die entsprechende Bemerkung ein und setzen den Status der Karteikarte auf "Unklar"'
        },
        copy: {
            title: 'Kopie',
            location: 'Standort',
            location_tip: 'Standort ohne Komma',
            signature: 'Signatur',
            signature_tip: 'Buchstabenfolgen sind mit Leerschlägen zu trennen, Zahlen mit Kommas (für Beispiele s. FAQ)',
            remarks: 'Bemerkung (Kopie)',
            remarks_tip: 'Sind Sie unsicher, ob Sie die Angaben richtig entziffert haben, tragen Sie hier bitte die entsprechende Bemerkung ein und setzen den Status auf "Unklar"'
        },
        contents: {
            title: 'Inhalt',
            language: 'Sprache',
            language_tip: 'Sprache gemäss Eintrag auf der Karteikarte bzw. gemäss Sprache des ersten Satzes. Bitte geben Sie die Sprache in folgenden Schreibweisen an: Latein, Deutsch, Griechisch etc.',
            printed: 'Gedruckt',
            printed_tip: 'Literaturangabe gemäss Karteikarte. Können Sie den Eintrag nicht entziffern, tragen Sie dies bitte in den Anmerkungen zur Karteikarte ein und setzen den Status auf "Unklar"',
            literature: 'Literatur',
            literature_tip: 'Literaturangabe gemäss Karteikarte. Können Sie den Eintrag nicht entziffern, tragen Sie dies bitte in den Anmerkungen zur Karteikarte ein und setzen den Status auf "Unklar"',
            first_sentence: 'Erster Satz',
            first_sentence_tip: 'Erster Satz gemäss Karteikarte. Können Sie den Eintrag nicht entziffern, tragen Sie dies bitte in den Anmerkungen zur Karteikarte ein und setzen den Status auf "Unklar"',
            remarks: 'Anmerkungen / Notiz zu dieser Karteikarte',
            remarks_tip: 'Falls Sie bei einer Korrektur unsicher sind oder einen Eintrag nicht entziffern konnten, tragen Sie dies bitte hier ein und setzen den Status auf "Unklar"'
        },
        state: {
            label: 'Status',
            open: 'Offen',
            unclear: 'Unklar',
            invalid: 'Ungültig',
            done: 'Abgeschlossen'
        },
        state_tip: `Status bezieht sich darauf, ob Datenbankeintrag und Karteikarte vollständig übereinstimmen. Wählen Sie den Status
            <ul>
                <li><strong>"Offen"</strong>, wenn der Datenbankeintrag noch nicht kontrolliert / korrigiert ist</li>
                <li><strong>"Unklar"</strong>, wenn der Datenbankeintrag korrigiert ist, jedoch Unsicherheiten bestehen (diese bitte im Bemerkungsfeld spezifizieren)</li>
                <li><strong>"Ungültig"</strong>, wenn das Bild keine Karteikarte zeigt oder die Karteikarte leer ist</li>
                <li><strong>"Abgeschlossen"</strong>, wenn der Datenbankeintrag vollständig kontrolliert und korrigiert ist, d.h. die Einträge in der Datenbank den Einträgen auf der Karteikarte entsprechen</li>
            </ul>
            `,
        save: 'Speichern',
        save_next: 'Speichern und weiter',
        save_success: 'Karteikarte ({id}) erfolgreich gespeichert.',
        save_error: 'Beim Speichern ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
    },
    viewer: {
        zoom: 'Zoom',
        autofocus: 'Automatisch fokussieren',
        autofocus_title: 'Wenn diese Funktion aktiviert ist, wird beim Fokussieren eines Textfeldes in der digitalen Karteikarte automatisch der entsprechende Aussschnitt in der originalen Karteikarte fokussiert.',
        zoom_in: 'Vergrössern',
        zoom_out: 'Verkleinern',
        zoom_full: 'Ganze Karteikarte anzeigen'
    },
    navigation: {
        previous_card: 'Vorherige Karte',
        next_card: 'Nächste Karte',
        overview: 'Übersicht',
        current: 'Aktuelle Karte'
    }
}