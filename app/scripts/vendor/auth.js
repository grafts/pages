(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var f = n[o] = {
                exports: {}
            };
            t[o][0].call(f.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, f, f.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631...",
                close: "\u0642\u0645 \u0628\u0625\u063a\u0644\u0627\u0642",
                signin: {
                    title: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
                    action: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
                    all: "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0643\u0644",
                    strategyEmailEmpty: "\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0641\u0627\u0631\u063a\u0627\u064b.",
                    strategyEmailInvalid: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u0627\u0644\u062d.",
                    strategyDomainInvalid: "{\u0627\u0644\u0645\u062c\u0627\u0644} \u0644\u0645 \u064a\u0643\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f.",
                    signupText: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644",
                    forgotText: "\u0647\u0644 \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643\u061f",
                    emailPlaceholder: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
                    usernamePlaceholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
                    passwordPlaceholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
                    separatorText: "\u0623\u0648",
                    serverErrorText: "\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0645\u0639\u0627\u0644\u062c\u0629 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644.",
                    returnUserLabel: "\u0622\u062e\u0631 \u0645\u0631\u0629 \u0642\u0645\u062a \u0628\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645...",
                    wrongEmailPasswordErrorText: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u062d\u064a\u062d \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.",
                    or: ".. \u0623\u0648 \u0642\u0645 \u0628\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645",
                    loadingMessage: "\u0627\u0644\u062a\u0648\u0642\u064a\u0639 \u0641\u064a \u0645\u0639 {connection}..."
                },
                signup: {
                    description: "",
                    title: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644",
                    action: "\u0627\u0644\u062a\u0633\u062c\u064a\u0644",
                    emailPlaceholder: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
                    passwordPlaceholder: "\u0625\u0646\u0634\u0627\u0621 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631",
                    cancelAction: "\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0623\u0645\u0631",
                    headerText: "\u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643",
                    footerText: "",
                    enterpriseEmailWarningText: "\u0647\u0630\u0627 \u0627\u0644\u0645\u062c\u0627\u0644 {\u0627\u0644\u0645\u062c\u0627\u0644} \u0642\u062f \u062a\u0645 \u062a\u0643\u0648\u064a\u0646\u0647 \u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644\u060c \u0648\u0644\u0627 \u064a\u0645\u0643\u0646 \u0623\u0646 \u062a\u0642\u0648\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628. \u062d\u0627\u0648\u0644 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0630\u0644\u0643.",
                    serverErrorText: "\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644."
                },
                reset: {
                    title: "\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
                    action: "\u0625\u0631\u0633\u0627\u0644",
                    emailPlaceholder: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
                    passwordPlaceholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",
                    repeatPasswordPlaceholder: "\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",
                    cancelAction: "\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0623\u0645\u0631",
                    successText: "\u0644\u0642\u062f \u0623\u0631\u0633\u0644\u0646\u0627 \u0641\u0642\u0637 \u0644\u0643 \u0631\u0633\u0627\u0644\u0629 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643.",
                    enterSamePasswordText: "\u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0646\u0641\u0633\u0647\u0627.",
                    headerText: "\u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629. \u0648\u0633\u0648\u0641 \u0646\u0631\u0633\u0644 \u0644\u0643 \u0631\u0633\u0627\u0644\u0629 \u0628\u0627\u0644\u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0644\u062a\u0623\u0643\u064a\u062f \u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.",
                    serverErrorText: "\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0645\u0639\u0627\u0644\u062c\u0629 \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631."
                }
            }
        }, {}
    ],
    2: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "Bitte warten...",
                close: "Schlie\xdfen",
                signin: {
                    title: "Anmelden",
                    action: "Anmelden",
                    all: "Alle anzeigen",
                    strategyEmailEmpty: "Die e-Mail ist leer.",
                    strategyEmailInvalid: "Die e-Mail ist ung\xfcltig.",
                    strategyDomainInvalid: "{domain} wurde nicht eingerichtet.",
                    signupText: "Anmelden",
                    forgotText: "Passwort vergessen?",
                    emailPlaceholder: "E-Mail",
                    usernamePlaceholder: "Benutzername",
                    passwordPlaceholder: "Passwort",
                    separatorText: "oder",
                    serverErrorText: "Gab es Fehler beim Verarbeiten der anmelden.",
                    returnUserLabel: "Letzte Mal unterschrieben Sie bei der Verwendung...",
                    wrongEmailPasswordErrorText: "Falsche e-Mail oder Passwort.",
                    or: "... oder melden Sie sich mit",
                    loadingMessage: "Bei der Anmeldung mit {connection}..."
                },
                signup: {
                    description: "",
                    title: "Anmelden",
                    action: "Anmelden",
                    emailPlaceholder: "E-Mail",
                    passwordPlaceholder: "Erstellen Sie ein Kennwort",
                    cancelAction: "Abbrechen",
                    headerText: "Bitte geben Sie Ihre e-Mail und Passwort",
                    footerText: 'Durch Klicken auf "Anmelden", stimmen Sie unseren Nutzungsbedingungen oder Datenschutzrichtlinien.',
                    enterpriseEmailWarningText: "Diese Dom\xe4ne {domain} f\xfcr Single Sign On konfiguriert wurde und Sie k\xf6nnen ein Konto erstellen. Versuchen Sie stattdessen sich anzumelden.",
                    serverErrorText: "Gab es Fehler beim Verarbeiten der Zeichens auf."
                },
                reset: {
                    title: "Passwort zur\xfccksetzen",
                    action: "Senden",
                    emailPlaceholder: "E-Mail",
                    passwordPlaceholder: "Neues Passwort",
                    repeatPasswordPlaceholder: "Neues Kennwort best\xe4tigen",
                    cancelAction: "Abbrechen",
                    successText: "Wir haben Sie nur eine e-Mail zum Zur\xfccksetzen Ihres Passworts geschickt.",
                    enterSamePasswordText: "Bitte geben Sie das gleiche Kennwort.",
                    headerText: "Bitte geben Sie Ihre e-Mail und das neue Kennwort. Wir senden Ihnen eine e-Mail zur Best\xe4tigung der Passwort\xe4nderung.",
                    serverErrorText: "Gab es Fehler beim Verarbeiten des Kennworts zur\xfccksetzen."
                }
            }
        }, {}
    ],
    3: [
        function(require, module, exports) {
            module.exports = {
                loadingTitle: "Please wait...",
                close: "Close",
                windowsAuthTitle: "Windows Authentication",
                signin: {
                    title: "Sign In",
                    action: "Sign In",
                    all: "Show all",
                    strategyEmailEmpty: "The email is empty.",
                    strategyEmailInvalid: "The email is invalid.",
                    strategyDomainInvalid: "The domain {domain} has not been setup.",
                    signupText: "Sign Up",
                    forgotText: "Forgot your password?",
                    emailPlaceholder: "Email",
                    usernamePlaceholder: "Username",
                    passwordPlaceholder: "Password",
                    separatorText: "or",
                    serverErrorText: "There was an error processing the sign in.",
                    returnUserLabel: "Last time you signed in using...",
                    domainUserLabel: "You are connected from your corporate network...",
                    wrongEmailPasswordErrorText: "Wrong email or password.",
                    or: "... or sign in using",
                    loadingMessage: "Signing In with {connection}..."
                },
                signup: {
                    description: "",
                    title: "Sign Up",
                    action: "Sign Up",
                    emailPlaceholder: "Email",
                    passwordPlaceholder: "Create a Password",
                    cancelAction: "Cancel",
                    headerText: "Please enter your email and password",
                    footerText: "",
                    enterpriseEmailWarningText: "This domain {domain} has been configured for Single Sign On and you can't create an account. Try signing in instead.",
                    serverErrorText: "There was an error processing the sign up.",
                    userExistsErrorText: "The user already exists."
                },
                reset: {
                    title: "Reset Password",
                    action: "Send",
                    emailPlaceholder: "Email",
                    passwordPlaceholder: "New Password",
                    repeatPasswordPlaceholder: "Confirm New Password",
                    cancelAction: "Cancel",
                    successText: "We've just sent you an email to reset your password.",
                    enterSamePasswordText: "Please enter the same password.",
                    headerText: "Please enter your email and the new password. We will send you an email to confirm the password change.",
                    serverErrorText: "There was an error processing the reset password.",
                    userDoesNotExistErrorText: "User does not exist."
                }
            }
        }, {}
    ],
    4: [
        function(require, module, exports) {
            module.exports = {
                loadingTitle: "Por favor espere...",
                close: "Cerrar",
                signin: {
                    title: "Iniciar sesi\xf3n",
                    action: "Ingresar",
                    all: "Mostrar todas",
                    strategyEmailEmpty: "El email esta vac\xedo.",
                    strategyEmailInvalid: "El email no es v\xe1lido.",
                    strategyDomainInvalid: "El dominio {domain} no esta configurado.",
                    signupText: "Registrarse",
                    forgotText: "Olvid\xe9 mi contrase\xf1a",
                    emailPlaceholder: "Email",
                    usernamePlaceholder: "Nombre de usuario",
                    passwordPlaceholder: "Contrase\xf1a",
                    separatorText: "o",
                    serverErrorText: "Hubo un error al iniciar sesi\xf3n.",
                    returnUserLabel: "La \xfaltima vez inici\xf3 sesi\xf3n con...",
                    domainUserLabel: "Usted se encuentra conectado desde su red corporativa...",
                    wrongEmailPasswordErrorText: "Email o clave incorrecta.",
                    or: "... o inicie sesi\xf3n usando",
                    loadingMessage: "Iniciando sesi\xf3n con {connection}..."
                },
                signup: {
                    description: "",
                    title: "Registrarse",
                    action: "Registrar",
                    emailPlaceholder: "Email",
                    passwordPlaceholder: "Contrase\xf1a",
                    cancelAction: "Cancelar",
                    headerText: "Por favor ingrese email y contrase\xf1a",
                    footerText: "",
                    enterpriseEmailWarningText: "El dominio {domain} ha sido configurado para Single Sign On y no puede crear una cuenta. Intente iniciar sesi\xf3n directamente.",
                    serverErrorText: "Hubo un error al procesar su registro.",
                    userExistsErrorText: "El usuario ya existe."
                },
                reset: {
                    title: "Resetear Contrase\xf1a",
                    action: "Enviar",
                    emailPlaceholder: "Email",
                    passwordPlaceholder: "Nueva Contrase\xf1a",
                    repeatPasswordPlaceholder: "Confirme nueva contrase\xf1a",
                    cancelAction: "Cancelar",
                    successText: "Hemos enviado un email para completar el reseteo de su contrase\xf1a.",
                    enterSamePasswordText: "Por favor ingrese la misma contrase\xf1a.",
                    headerText: "Por favor ingrese su email y la nueva contrase\xf1a. Enviaremos un email para confirmar el cambio.",
                    serverErrorText: "Hubo un error al resetear su contrase\xf1a.",
                    userDoesNotExistErrorText: "Usuario inv\xe1lido."
                }
            }
        }, {}
    ],
    5: [
        function(require, module, exports) {
            module.exports = {
                loadingTitle: "Veuillez patienter...",
                close: "Fermer",
                windowsAuthTitle: "Connexion Windows",
                signin: {
                    title: "Connexion",
                    action: "Connexion",
                    all: "Afficher tout",
                    strategyEmailEmpty: "Le courriel est vide.",
                    strategyEmailInvalid: "Le courriel n'est pas valide.",
                    strategyDomainInvalid: "Le domaine {domain} n'a pas \xe9t\xe9 configur\xe9.",
                    signupText: "Inscrivez-vous",
                    forgotText: "Vous avez oubli\xe9 votre mot de passe ?",
                    emailPlaceholder: "Courriel",
                    usernamePlaceholder: "Nom d'utilisateur",
                    passwordPlaceholder: "Mot de passe",
                    separatorText: "ou",
                    serverErrorText: "Erreur lors de la connexion.",
                    returnUserLabel: "Lors de votre derni\xe8re connexion vous avez utilis\xe9...",
                    domainUserLabel: "Vous \xeates connect\xe9 depuis le r\xe9seau de votre entreprise...",
                    wrongEmailPasswordErrorText: "Courriel ou mot de passe incorrect.",
                    or: "... ou connectez-vous \xe0 l'aide de",
                    loadingMessage: "Connexion \xe0 l'aide de {connection}..."
                },
                signup: {
                    description: "",
                    title: "Inscrivez-vous",
                    action: "Inscrivez-vous",
                    emailPlaceholder: "Courriel",
                    passwordPlaceholder: "Cr\xe9er un mot de passe",
                    cancelAction: "Annuler",
                    headerText: "Veuillez entrer votre courriel et mot de passe",
                    footerText: "",
                    enterpriseEmailWarningText: "Ce domaine {domain} a \xe9t\xe9 configur\xe9 pour le Single Sign On et vous ne pouvez pas cr\xe9er de compte. Essayez de vous connecter \xe0 un compte existant.",
                    serverErrorText: "Erreur lors de l'inscription.",
                    userExistsErrorText: "Cet utilisateur existe d\xe9j\xe0."
                },
                reset: {
                    title: "R\xe9initialiser votre mot de passe",
                    action: "Envoyer",
                    emailPlaceholder: "Courriel",
                    passwordPlaceholder: "Nouveau mot de passe",
                    repeatPasswordPlaceholder: "Confirmer le nouveau mot de passe",
                    cancelAction: "Annuler",
                    successText: "Vous allez recevoir sous quelques minutes un courriel vous indiquant comment r\xe9initialiser votre mot de passe.",
                    enterSamePasswordText: "S'il vous pla\xeet entrez le m\xeame mot de passe.",
                    headerText: "Veuillez saisir votre courriel et mot de passe. Nous vous enverrons un courriel pour confirmer le changement de mot de passe.",
                    serverErrorText: "Erreur de traitement los de r\xe9initialisation du mot de passe.",
                    userDoesNotExistErrorText: "Utilisateur introuvable."
                }
            }
        }, {}
    ],
    6: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "\u05d7\u05db\u05d4 \u05d1\u05d1\u05e7\u05e9\u05d4...",
                close: "\u05e1\u05d2\u05d5\u05e8",
                signin: {
                    title: "\u05d4\u05d9\u05e8\u05e9\u05dd",
                    action: "\u05d4\u05d9\u05e8\u05e9\u05dd",
                    all: "\u05d4\u05e6\u05d2 \u05d4\u05db\u05dc",
                    strategyEmailEmpty: "\u05d4\u05d3\u05d5\u05d0 \u05dc \u05d4\u05d5\u05d0 \u05e8\u05d9\u05e7.",
                    strategyEmailInvalid: "\u05d4\u05d3\u05d5\u05d0 \u05dc \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9.",
                    strategyDomainInvalid: "\u05d4\u05ea\u05d7\u05d5\u05dd {domain} \u05dc\u05d0 \u05d4\u05d9\u05ea\u05d4 \u05ea\u05d5\u05db\u05e0\u05d9\u05ea \u05d4\u05d4\u05ea\u05e7\u05e0\u05d4.",
                    signupText: "\u05d4\u05d9\u05e8\u05e9\u05dd",
                    forgotText: "\u05e9\u05db\u05d7\u05ea \u05d4\u05e1\u05d9\u05e1\u05de\u05d0?",
                    emailPlaceholder: "\u05d3\u05d5\u05d0",
                    usernamePlaceholder: "\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9",
                    passwordPlaceholder: "\u05e1\u05d9\u05e1\u05de\u05d4",
                    separatorText: "\u05d0\u05d5",
                    serverErrorText: "\u05d0\u05d9\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05e2\u05d9\u05d1\u05d5\u05d3 \u05d4\u05db\u05e0\u05d9\u05e1\u05d4.",
                    returnUserLabel: "\u05d1\u05e4\u05e2\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d4 \u05e0\u05db\u05e0\u05e1\u05ea \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea...",
                    wrongEmailPasswordErrorText: '\u05d4\u05d3\u05d5\u05d0"\u05dc \u05d8\u05d5\u05e2\u05d4 \u05d0\u05d5 \u05e1\u05d9\u05e1\u05de\u05d4.',
                    or: ". \u05d0\u05d5 \u05db\u05e0\u05d9\u05e1\u05d4 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea",
                    loadingMessage: "\u05db\u05e0\u05d9\u05e1\u05d4 \u05e2\u05dd {connection}..."
                },
                signup: {
                    description: "",
                    title: "\u05d4\u05d9\u05e8\u05e9\u05dd",
                    action: "\u05d4\u05d9\u05e8\u05e9\u05dd",
                    emailPlaceholder: "\u05d3\u05d5\u05d0",
                    passwordPlaceholder: "\u05e6\u05d5\u05e8 \u05e1\u05d9\u05e1\u05de\u05d4",
                    cancelAction: "\u05d1\u05d9\u05d8\u05d5\u05dc",
                    headerText: "\u05d4\u05d6\u05d9\u05e0\u05d5 \u05d0\u05ea \u05db\u05ea\u05d5\u05d1\u05ea \u05d4\u05de\u05d9\u05d9\u05dc \u05d5\u05d4\u05e1\u05d9\u05e1\u05de\u05d0",
                    footerText: "",
                    enterpriseEmailWarningText: "\u05ea\u05d7\u05d5\u05dd \u05d6\u05d4, {domain} \u05e0\u05e7\u05d1\u05e2\u05d4 \u05e2\u05d1\u05d5\u05e8 \u05db\u05e0\u05d9\u05e1\u05d4 \u05d9\u05d7\u05d9\u05d3\u05d4, \u05d0\u05d9\u05df \u05d1\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea\u05da \u05dc\u05d9\u05e6\u05d5\u05e8 \u05d7\u05e9\u05d1\u05d5\u05df. \u05e0\u05e1\u05d4 \u05dc\u05d4\u05d9\u05db\u05e0\u05e1 \u05d1\u05de\u05e7\u05d5\u05dd.",
                    serverErrorText: "\u05d0\u05d9\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05e2\u05d9\u05d1\u05d5\u05d3 \u05d0\u05ea \u05d4\u05e9\u05dc\u05d8 \u05dc\u05de\u05e2\u05dc\u05d4."
                },
                reset: {
                    title: "\u05d0\u05d9\u05e4\u05d5\u05e1 \u05e1\u05d9\u05e1\u05de\u05d4",
                    action: "\u05e9\u05dc\u05d7",
                    emailPlaceholder: "\u05d3\u05d5\u05d0",
                    passwordPlaceholder: "\u05e1\u05d9\u05e1\u05de\u05d4 \u05d7\u05d3\u05e9\u05d4",
                    repeatPasswordPlaceholder: "\u05d0\u05e9\u05e8 \u05e1\u05d9\u05e1\u05de\u05d4 \u05d7\u05d3\u05e9\u05d4",
                    cancelAction: "\u05d1\u05d9\u05d8\u05d5\u05dc",
                    successText: "\u05d0\u05e0\u05d7\u05e0\u05d5 \u05e4\u05e9\u05d5\u05d8 \u05dc\u05e9\u05dc\u05d5\u05d7 \u05dc\u05da \u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9 \u05db\u05d3\u05d9 \u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05e1\u05d9\u05e1\u05de\u05d4 \u05e9\u05dc\u05da.",
                    enterSamePasswordText: "\u05d4\u05d6\u05d9\u05e0\u05d5 \u05d1\u05d1\u05e7\u05e9\u05d4 \u05d0\u05ea \u05d0\u05d5\u05ea\u05d4 \u05e1\u05d9\u05e1\u05de\u05d4.",
                    headerText: "\u05d0\u05e0\u05d0 \u05d4\u05d6\u05df \u05d0\u05ea \u05d4\u05d3\u05d5\u05d0\u05e8 \u05d4\u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9 \u05e9\u05dc\u05da \u05d5\u05d0\u05ea \u05d4\u05e1\u05d9\u05e1\u05de\u05d4 \u05d4\u05d7\u05d3\u05e9\u05d4. \u05d0\u05e0\u05d5 \u05e0\u05e9\u05dc\u05d7 \u05dc\u05da \u05d4\u05d5\u05d3\u05e2\u05ea \u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9 \u05db\u05d3\u05d9 \u05dc\u05d0\u05e9\u05e8 \u05e9\u05d9\u05e0\u05d5\u05d9 \u05d4\u05e1\u05d9\u05e1\u05de\u05d4.",
                    serverErrorText: "\u05d0\u05d9\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05e2\u05d9\u05d1\u05d5\u05d3 \u05d0\u05d9\u05e4\u05d5\u05e1 \u05d4\u05e1\u05d9\u05e1\u05de\u05d4."
                }
            }
        }, {}
    ],
    7: [
        function(require, module, exports) {
            var dics_data = {
                ar: require("./ar.json"),
                de: require("./de.json"),
                en: require("./en.json"),
                es: require("./es.json"),
                fr: require("./fr-FR.json"),
                "fr-FR": require("./fr-FR.json"),
                he: require("./he.json"),
                it: require("./it.json"),
                ja: require("./ja.json"),
                nl: require("./nl-NL.json"),
                "nl-NL": require("./nl-NL.json"),
                pt: require("./pt.json"),
                "pt-BR": require("./pt-BR.json"),
                ru: require("./ru.json"),
                tlh: require("./tlh.json"),
                zh: require("./zh.json")
            };
            var default_dict = dics_data["en"];

            function findProp(o, s) {
                s = s.replace(/\[(\w+)\]/g, ":$1");
                s = s.replace(/^\:/, "");
                var a = s.split(":");
                while (a.length) {
                    var n = a.shift();
                    if (n in o) {
                        o = o[n]
                    } else {
                        return
                    }
                }
                return o
            }

            function Dictionary(data) {
                this._data = data
            }
            Dictionary.prototype.t = function(key) {
                return findProp(this._data, key) || findProp(default_dict, key)
            };
            module.exports.getDict = function(langOrDict) {
                if (!langOrDict) {
                    return new Dictionary(default_dict)
                }
                if (typeof langOrDict === "string") {
                    var dict = dics_data[langOrDict] || dics_data[langOrDict.split("-")[0]];
                    return new Dictionary(dict)
                } else {
                    return new Dictionary(langOrDict)
                }
            }
        }, {
            "./ar.json": 1,
            "./de.json": 2,
            "./en.json": 3,
            "./es.json": 4,
            "./fr-FR.json": 5,
            "./he.json": 6,
            "./it.json": 8,
            "./ja.json": 9,
            "./nl-NL.json": 10,
            "./pt-BR.json": 11,
            "./pt.json": 12,
            "./ru.json": 13,
            "./tlh.json": 14,
            "./zh.json": 15
        }
    ],
    8: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "Attendere prego...",
                close: "Chiudere",
                signin: {
                    title: "Accedi",
                    action: "Accedi",
                    all: "Visualizza tutti",
                    strategyEmailEmpty: "L'email \xe8 vuota.",
                    strategyEmailInvalid: "L'email non \xe8 valido.",
                    strategyDomainInvalid: "Il dominio {domain} non \xe8 stata l'installazione.",
                    signupText: "Registrati",
                    forgotText: "Hai dimenticato la password?",
                    emailPlaceholder: "Posta elettronica",
                    usernamePlaceholder: "Nome utente",
                    passwordPlaceholder: "Password",
                    separatorText: "o",
                    serverErrorText: "C'\xe8 stato un errore durante l'elaborazione il segno in.",
                    returnUserLabel: "Ultima volta che hai eseguito utilizzando...",
                    wrongEmailPasswordErrorText: "Email errato o password.",
                    or: "... oppure accedi usando",
                    loadingMessage: "Accedi con {connection}..."
                },
                signup: {
                    description: "",
                    title: "Registrati",
                    action: "Registrati",
                    emailPlaceholder: "Posta elettronica",
                    passwordPlaceholder: "Creare una Password",
                    cancelAction: "Annulla",
                    headerText: "Inserisci la tua email e la password",
                    footerText: "",
                    enterpriseEmailWarningText: "Questo dominio {domain} \xe8 stato configurato per il Single Sign On e non \xe8 possibile creare un account. Prova ad accedere invece.",
                    serverErrorText: "C'\xe8 stato un errore durante l'elaborazione il segno fino."
                },
                reset: {
                    title: "Reimpostare la Password",
                    action: "Invia",
                    emailPlaceholder: "Posta elettronica",
                    passwordPlaceholder: "Nuova Password",
                    repeatPasswordPlaceholder: "Conferma nuova Password",
                    cancelAction: "Annulla",
                    successText: "Noi abbiamo appena inviato un'e-mail per reimpostare la password.",
                    enterSamePasswordText: "Inserisci la stessa password.",
                    headerText: "Inserisci il tuo indirizzo email e la password nuova. Ti invieremo un'email per confermare la modifica della password.",
                    serverErrorText: "C'\xe8 stato un errore durante l'elaborazione il password reset."
                }
            }
        }, {}
    ],
    9: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002\u3002\u3002",
                close: "\u9589\u3058\u308b",
                signin: {
                    title: "\u30b5\u30a4\u30f3\u30a4\u30f3",
                    action: "\u30b5\u30a4\u30f3\u30a4\u30f3",
                    all: "\u3059\u3079\u3066\u8868\u793a\u3057\u307e\u3059\u3002",
                    strategyEmailEmpty: "\u96fb\u5b50\u30e1\u30fc\u30eb\u304c\u7a7a\u3067\u3059\u3002",
                    strategyEmailInvalid: "\u96fb\u5b50\u30e1\u30fc\u30eb\u306f\u6709\u52b9\u3067\u3059\u3002",
                    strategyDomainInvalid: "{\u30c9\u30e1\u30a4\u30f3} \u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",
                    signupText: "\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",
                    forgotText: "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u304a\u5fd8\u308c\u3067\u3059\u304b\uff1f",
                    emailPlaceholder: "\u96fb\u5b50\u30e1\u30fc\u30eb",
                    usernamePlaceholder: "\u30e6\u30fc\u30b6\u540d",
                    passwordPlaceholder: "\u30d1\u30b9\u30ef\u30fc\u30c9",
                    separatorText: "\u307e\u305f\u306f",
                    serverErrorText: "\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u51e6\u7406\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u3042\u308a\u307e\u3057\u305f\u3002",
                    returnUserLabel: "\u6700\u5f8c\u306e\u6642\u9593\u3092\u4f7f\u7528\u3057\u3066\u3092\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3066.",
                    wrongEmailPasswordErrorText: "\u9593\u9055\u3063\u305f\u30e1\u30fc\u30eb \u30a2\u30c9\u30ec\u30b9\u307e\u305f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\u3002",
                    or: "... \u307e\u305f\u306f\u3092\u4f7f\u7528\u3057\u3066\u30b5\u30a4\u30f3\u30a4\u30f3",
                    loadingMessage: "\u3067\u30b5\u30a4\u30f3\u30a4\u30f3 {connection}..."
                },
                signup: {
                    description: "",
                    title: "\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",
                    action: "\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",
                    emailPlaceholder: "\u96fb\u5b50\u30e1\u30fc\u30eb",
                    passwordPlaceholder: "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",
                    cancelAction: "\u30ad\u30e3\u30f3\u30bb\u30eb",
                    headerText: "\u3042\u306a\u305f\u306e\u30e1\u30fc\u30eb \u30a2\u30c9\u30ec\u30b9\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    footerText: "",
                    enterpriseEmailWarningText: "\u3053\u306e\u30c9\u30e1\u30a4\u30f3 {} \u304c\u69cb\u6210\u3055\u308c\u3066\u3044\u308b\u30b7\u30f3\u30b0\u30eb \u30b5\u30a4\u30f3\u30aa\u30f3 \u30fb \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    serverErrorText: "\u7b26\u53f7\u3092\u51e6\u7406\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u3042\u308a\u307e\u3057\u305f\u3002"
                },
                reset: {
                    title: "\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30ea\u30bb\u30c3\u30c8",
                    action: "\u9001\u4fe1",
                    emailPlaceholder: "\u96fb\u5b50\u30e1\u30fc\u30eb",
                    passwordPlaceholder: "\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9",
                    repeatPasswordPlaceholder: "\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",
                    cancelAction: "\u30ad\u30e3\u30f3\u30bb\u30eb",
                    successText: "\u6211\u3005 \u306f\u3061\u3087\u3046\u3069\u3042\u306a\u305f\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002",
                    enterSamePasswordText: "\u540c\u3058\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    headerText: "\u3042\u306a\u305f\u306e\u30e1\u30fc\u30eb \u30a2\u30c9\u30ec\u30b9\u3068\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6211\u3005 \u306f\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u5909\u66f4\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u30e1\u30fc\u30eb\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002",
                    serverErrorText: "\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30ea\u30bb\u30c3\u30c8\u3092\u51e6\u7406\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u3042\u308a\u307e\u3057\u305f\u3002"
                }
            }
        }, {}
    ],
    10: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "Een ogenblik geduld...",
                close: "Sluiten",
                signin: {
                    title: "Aanmelden",
                    action: "Aanmelden",
                    all: "Toon alles",
                    strategyEmailEmpty: "Het veld e-mail is leeg.",
                    strategyEmailInvalid: "Het veld e-mail is ongeldig.",
                    strategyDomainInvalid: "Het domein {domain} is niet geactiveerd.",
                    signupText: "Aanmelden",
                    forgotText: "Wachtwoord vergeten?",
                    emailPlaceholder: "E-mail",
                    usernamePlaceholder: "Usernamea",
                    passwordPlaceholder: "Wachtwoord",
                    separatorText: "of",
                    serverErrorText: "Er is een fout opgetreden tijdens het inloggen.",
                    returnUserLabel: "De laatste keer logde je in met...",
                    wrongEmailPasswordErrorText: "Verkeerd e-mail of wachtwoord.",
                    or: "... of meld u aan met",
                    loadingMessage: "Aanmelden met {connection}..."
                },
                signup: {
                    description: "",
                    title: "Aanmelden",
                    action: "Aanmelden",
                    emailPlaceholder: "E-mail",
                    passwordPlaceholder: "Een wachtwoord maken",
                    cancelAction: "Annuleren",
                    headerText: "Voer je email en wachtwoord in",
                    footerText: "",
                    enterpriseEmailWarningText: "Dit domein {domain} is geconfigureerd voor eenmalige aanmelding en u kunt geen account aanmaken. Probeer u aan te melden in plaats daarvan.",
                    serverErrorText: "Er is een fout opgetreden bij de verwerking van uw aanmelding."
                },
                reset: {
                    title: "Wachtwoord resetten",
                    action: "Verzenden",
                    emailPlaceholder: "E-mail",
                    passwordPlaceholder: "Nieuw wachtwoord",
                    repeatPasswordPlaceholder: "Bevestig het nieuwe wachtwoord",
                    cancelAction: "Annuleren",
                    successText: "We hebben u zojuist een e-mail gestuurd om uw wachtwoord te resetten.",
                    enterSamePasswordText: "Voer hetzelfde wachtwoord in.",
                    headerText: "Voer uw e-mailadres en het nieuwe wachtwoord in. Wij sturen u een e-mail ter bevestiging van de wachtwoordswijziging.",
                    serverErrorText: "Er is een fout opgetreden bij de verwerking van het nieuwe wachtwoord."
                }
            }
        }, {}
    ],
    11: [
        function(require, module, exports) {
            module.exports = {
                loadingTitle: "Carregando...",
                close: "Fechar",
                signin: {
                    title: "Entrar",
                    action: "Entrar",
                    all: "Mostrar todos",
                    strategyEmailEmpty: "O e-mail deve ser preenchido.",
                    strategyEmailInvalid: "O email \xe9 inv\xe1lido.",
                    strategyDomainInvalid: "O dom\xednio {domain} n\xe3o foi informado.",
                    signupText: "Registe-se",
                    forgotText: "Esqueceu sua senha?",
                    emailPlaceholder: "E-mail",
                    usernamePlaceholder: "Nome de Usu\xe1rio",
                    passwordPlaceholder: "Senha",
                    separatorText: "ou",
                    serverErrorText: "Houve um erro ao efetuar o login.",
                    returnUserLabel: "Da \xfaltima vez que voc\xea fez login usando...",
                    wrongEmailPasswordErrorText: "E-mail ou senha inv\xe1lidos.",
                    or: "... ou entre usando",
                    loadingMessage: "Entrar com {connection}..."
                },
                signup: {
                    description: "",
                    title: "Cadastre-se",
                    action: "Cadastre-se",
                    emailPlaceholder: "E-mail",
                    passwordPlaceholder: "Crie uma senha",
                    cancelAction: "Cancelar",
                    headerText: "Por favor, digite seu e-mail e senha",
                    footerText: "",
                    enterpriseEmailWarningText: "Este dom\xednio {domain} foi configurado para Sign-On \xfanico e voc\xea n\xe3o pode criar uma conta. Tente fazer o login em vez disso.",
                    serverErrorText: "Houve um erro ao efetuar o login."
                },
                reset: {
                    title: "Redefinir senha",
                    action: "Enviar",
                    emailPlaceholder: "E-mail",
                    passwordPlaceholder: "Nova senha",
                    repeatPasswordPlaceholder: "Confirmar nova senha",
                    cancelAction: "Cancelar",
                    successText: "J\xe1 enviamos um e-mail para redefinir sua senha.",
                    enterSamePasswordText: "Por favor digite a mesma senha.",
                    headerText: "Por favor, digite seu e-mail e a senha nova. N\xf3s lhe enviaremos um e-mail para confirmar a altera\xe7\xe3o de senha.",
                    serverErrorText: "Houve um erro ao redefinir a senha."
                }
            }
        }, {}
    ],
    12: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "Aguarde...",
                close: "Fechar",
                signin: {
                    title: "Entrar",
                    action: "Entrar",
                    all: "Mostrar todos",
                    strategyEmailEmpty: "O e-mail \xe9 vazio.",
                    strategyEmailInvalid: "O email \xe9 inv\xe1lido.",
                    strategyDomainInvalid: "O dom\xednio {domain} n\xe3o foi a instala\xe7\xe3o.",
                    signupText: "Inscri\xe7\xe3o",
                    forgotText: "Esqueceu sua senha?",
                    emailPlaceholder: "Email",
                    usernamePlaceholder: "Nome de Usu\xe1rio",
                    passwordPlaceholder: "Senha",
                    separatorText: "ou",
                    serverErrorText: "Houve um erro ao processar o sinal em.",
                    returnUserLabel: "Da \xfaltima vez que voc\xea assinou usando...",
                    wrongEmailPasswordErrorText: "Senha ou e-mail errado.",
                    or: "... ou Cadastre-se no uso de",
                    loadingMessage: "Entrar com {connection}..."
                },
                signup: {
                    description: "",
                    title: "Inscri\xe7\xe3o",
                    action: "Inscri\xe7\xe3o",
                    emailPlaceholder: "Email",
                    passwordPlaceholder: "Crie uma senha",
                    cancelAction: "Cancelar",
                    headerText: "Por favor, digite seu e-mail e senha",
                    footerText: "",
                    enterpriseEmailWarningText: "Este dom\xednio {domain} tiver sido configurado para Sign-On \xfanico e voc\xea n\xe3o pode criar uma conta. Tente entrar em vez disso.",
                    serverErrorText: "Houve um erro ao processar o sinal de cima."
                },
                reset: {
                    title: "Redefinir senha",
                    action: "Enviar",
                    emailPlaceholder: "Email",
                    passwordPlaceholder: "Nova senha",
                    repeatPasswordPlaceholder: "Confirmar nova senha",
                    cancelAction: "Cancelar",
                    successText: "S\xf3 te enviamos um e-mail para redefinir sua senha.",
                    enterSamePasswordText: "Por favor digite a mesma senha.",
                    headerText: "Por favor, digite seu e-mail e a senha nova. N\xf3s lhe enviaremos um e-mail para confirmar a altera\xe7\xe3o de senha.",
                    serverErrorText: "Houve um erro ao processar a redefinir a senha."
                }
            }
        }, {}
    ],
    13: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...",
                close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                signin: {
                    title: "\u0412\u043e\u0439\u0442\u0438",
                    action: "\u0412\u043e\u0439\u0442\u0438",
                    all: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435",
                    strategyEmailEmpty: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u043c.",
                    strategyEmailInvalid: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c.",
                    strategyDomainInvalid: "{domain} \u043d\u0435 \u0431\u044b\u043b\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.",
                    signupText: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                    forgotText: "\u0417\u0430\u0431\u044b\u043b\u0438 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c?",
                    emailPlaceholder: "E-mail",
                    usernamePlaceholder: "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                    passwordPlaceholder: "\u041f\u0430\u0440\u043e\u043b\u044c",
                    separatorText: "\u0438\u043b\u0438",
                    serverErrorText: "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0432\u0445\u043e\u0434\u0430.",
                    returnUserLabel: "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0440\u0430\u0437 \u0432\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438...",
                    wrongEmailPasswordErrorText: "\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c.",
                    or: "... \u0438\u043b\u0438 \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e",
                    loadingMessage: "\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0412 \u0441 {connection}..."
                },
                signup: {
                    description: "",
                    title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                    action: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                    emailPlaceholder: "E-mail",
                    passwordPlaceholder: "\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",
                    cancelAction: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    headerText: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 email \u0438 \u043f\u0430\u0440\u043e\u043b\u044c",
                    footerText: "",
                    enterpriseEmailWarningText: "\u042d\u0442\u043e\u0442 \u0434\u043e\u043c\u0435\u043d {domain} \u0431\u044b\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0432\u0445\u043e\u0434\u0430 \u0438 \u043d\u0435\u043b\u044c\u0437\u044f \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u0432 \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e.",
                    serverErrorText: "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u043d\u0430\u043a \u0432\u0432\u0435\u0440\u0445."
                },
                reset: {
                    title: "\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f",
                    action: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                    emailPlaceholder: "E-mail",
                    passwordPlaceholder: "\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    repeatPasswordPlaceholder: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                    cancelAction: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    successText: "\u041c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0432\u0430\u043c \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c.",
                    enterSamePasswordText: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u0442 \u0436\u0435 \u043f\u0430\u0440\u043e\u043b\u044c.",
                    headerText: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0438 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c. \u041c\u044b \u0432\u044b\u0448\u043b\u0435\u043c \u0432\u0430\u043c \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f.",
                    serverErrorText: "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0431\u0440\u043e\u0441\u0430 \u043f\u0430\u0440\u043e\u043b\u044f."
                }
            }
        }, {}
    ],
    14: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "DubelmoHchugh loS.",
                close: "SoQmoH",
                signin: {
                    title: "qI'",
                    action: "qI'",
                    all: "cha' Hoch",
                    strategyEmailEmpty: "chIm email.",
                    strategyEmailInvalid: "email invalid.",
                    strategyDomainInvalid: "{domain} yer wej setup.",
                    signupText: "qI'",
                    forgotText: "mu'wIj lIj?",
                    emailPlaceholder: "email",
                    usernamePlaceholder: "tus neeg siv lub npe",
                    passwordPlaceholder: "mu'wIj",
                    separatorText: "ghap",
                    serverErrorText: "Qagh qaStaHvIS qI' mIw tu'lu'.",
                    returnUserLabel: "Qav poH qI' SoH qaStaHvIS lo'.",
                    wrongEmailPasswordErrorText: "QIH email pagh mu'wIj.",
                    or: "... pagh qI' qaStaHvIS yIlo'",
                    loadingMessage: "Ukubhalisela In nge {connection}..."
                },
                signup: {
                    description: "",
                    title: "qI'",
                    action: "qI'",
                    emailPlaceholder: "email",
                    passwordPlaceholder: "mu'wIj chenmoH",
                    cancelAction: "qIl",
                    headerText: "nuqneH email mu'wIj je",
                    footerText: "",
                    enterpriseEmailWarningText: "configured {domain} yer Vas qI' 'ej account pagh chenmoH SoH. nID, qI' instead.",
                    serverErrorText: "Qagh qI' mIw Ha' tu'lu'."
                },
                reset: {
                    title: "mu'wIj reset",
                    action: "ngeH",
                    emailPlaceholder: "email",
                    passwordPlaceholder: "mu'wIj chu'",
                    repeatPasswordPlaceholder: "mu'wIj chu' confirm",
                    cancelAction: "qIl",
                    successText: "jIboQqang reset mu'wIj neH ngeH SoH maH.",
                    enterSamePasswordText: "DubelmoHchugh mu'wIj rap 'el.",
                    headerText: "nuqneH email chu' mu'wIj je. jIboQqang mu'wIj choH confirm ngeH SoH maH.",
                    serverErrorText: "Qagh reset mu'wIj mIw tu'lu'."
                }
            }
        }, {}
    ],
    15: [
        function(require, module, exports) {
            module.exports = {
                "//": "This is an automatic translation. Help us to improve it.",
                loadingTitle: "\u8bf7\u7a0d\u5019\u3002\u3002\u3002",
                close: "\u5173\u95ed",
                signin: {
                    title: "\u767b\u5f55",
                    action: "\u767b\u5f55",
                    all: "\u5168\u90e8\u663e\u793a",
                    strategyEmailEmpty: "\u7535\u5b50\u90ae\u4ef6\u662f\u7a7a\u7684\u3002",
                    strategyEmailInvalid: "\u7535\u5b50\u90ae\u4ef6\u662f\u65e0\u6548\u7684\u3002",
                    strategyDomainInvalid: "\u6307\u5b9a\u57df {domain} \u5c1a\u672a\u5b89\u88c5\u3002",
                    signupText: "\u767b\u8bb0",
                    forgotText: "\u5fd8\u8bb0\u4e86\u60a8\u7684\u5bc6\u7801\u5417\uff1f",
                    emailPlaceholder: "\u7535\u5b50\u90ae\u4ef6",
                    usernamePlaceholder: "\u7528\u6237\u540d",
                    passwordPlaceholder: "\u5bc6\u7801",
                    separatorText: "\u6216",
                    serverErrorText: "\u5904\u7406\u6240\u793a\u7684\u6807\u5fd7\u65f6\u51fa\u9519\u3002",
                    returnUserLabel: "\u6700\u540e\u4e00\u6b21\u4f60\u5728\u4f7f\u7528\u7b7e\u7f72...",
                    wrongEmailPasswordErrorText: "\u9519\u8bef\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u5bc6\u7801\u3002",
                    or: "...\u6216\u4f7f\u7528\u767b\u5f55",
                    loadingMessage: "\u7b7e\u7ea6\u4e0e {connection}..."
                },
                signup: {
                    description: "",
                    title: "\u767b\u8bb0",
                    action: "\u767b\u8bb0",
                    emailPlaceholder: "\u7535\u5b50\u90ae\u4ef6",
                    passwordPlaceholder: "\u521b\u5efa\u4e00\u4e2a\u5bc6\u7801",
                    cancelAction: "\u53d6\u6d88",
                    headerText: "\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u548c\u5bc6\u7801",
                    footerText: "",
                    enterpriseEmailWarningText: "\u6307\u5b9a\u6b64\u57df {domain} \u5df2\u914d\u7f6e\u4e3a\u5355\u4e00\u767b\u5f55\u548c\u60a8\u4e0d\u80fd\u521b\u5efa\u4e00\u4e2a\u5e10\u6237\u3002\u8bf7\u5c1d\u8bd5\u767b\u5f55\u76f8\u53cd\u3002",
                    serverErrorText: "\u5904\u7406\u6807\u5fd7\u5411\u4e0a\u65f6\u51fa\u9519\u3002"
                },
                reset: {
                    title: "\u91cd\u7f6e\u5bc6\u7801",
                    action: "\u53d1\u9001",
                    emailPlaceholder: "\u7535\u5b50\u90ae\u4ef6",
                    passwordPlaceholder: "\u65b0\u5bc6\u7801",
                    repeatPasswordPlaceholder: "\u786e\u8ba4\u65b0\u5bc6\u7801",
                    cancelAction: "\u53d6\u6d88",
                    successText: "\u6211\u4eec\u521a\u521a\u5df2\u7ecf\u5411\u60a8\u53d1\u9001\u4e00\u5c01\u7535\u5b50\u90ae\u4ef6\uff0c\u91cd\u7f6e\u60a8\u7684\u5bc6\u7801\u3002",
                    enterSamePasswordText: "\u8bf7\u8f93\u5165\u76f8\u540c\u7684\u5bc6\u7801\u3002",
                    headerText: "\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u548c\u65b0\u7684\u5bc6\u7801\u3002\u6211\u4eec\u5c06\u5411\u60a8\u53d1\u9001\u90ae\u4ef6\u4ee5\u786e\u8ba4\u5bc6\u7801\u66f4\u6539\u3002",
                    serverErrorText: "\u5904\u7406\u91cd\u7f6e\u5bc6\u7801\u65f6\u51fa\u9519\u3002"
                }
            }
        }, {}
    ],
    16: [
        function(require, module, exports) {
            function insert(css) {
                var head = document.getElementsByTagName("head")[0];
                var style = document.createElement("style");
                style.type = "text/css";
                head.appendChild(style);
                if (style.styleSheet) {
                    style.styleSheet.cssText = css
                } else {
                    style.appendChild(document.createTextNode(css))
                }
            }
            var fs = require("fs");
            var style = '.a0-widget article,.a0-widget aside,.a0-widget details,.a0-widget figcaption,.a0-widget figure,.a0-widget footer,.a0-widget header,.a0-widget hgroup,.a0-widget nav,.a0-widget section,.a0-widget summary{display:block}.a0-widget audio,.a0-widget canvas,.a0-widget video{display:inline-block;*display:inline;*zoom:1}.a0-widget audio:not([controls]){display:none;height:0}.a0-widget [hidden]{display:none}.a0-widget html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}.a0-widget a,.a0-widget button,.a0-widget div,.a0-widget h1,.a0-widget h2,.a0-widget html,.a0-widget input,.a0-widget select,.a0-widget span,.a0-widget textarea{font-family:sans-serif}.a0-widget body{margin:0}.a0-widget a:focus{outline:thin dotted}.a0-widget a:active,.a0-widget a:hover{outline:0}.a0-widget h4{font-size:1em;margin:1.33em 0}.a0-widget h5{font-size:.83em;margin:1.67em 0}.a0-widget h6{font-size:.75em;margin:2.33em 0}.a0-widget abbr[title]{border-bottom:1px dotted}.a0-widget b,.a0-widget strong{font-weight:700}.a0-widget blockquote{margin:1em 40px}.a0-widget dfn{font-style:italic}.a0-widget mark{background:#ff0;color:#000}.a0-widget p,.a0-widget pre{margin:1em 0}.a0-widget code,.a0-widget kbd,.a0-widget pre,.a0-widget samp{font-family:monospace,serif;_font-family:\'courier new\',monospace;font-size:1em}.a0-widget pre{white-space:pre;white-space:pre-wrap;word-wrap:break-word}.a0-widget q{quotes:none}.a0-widget q:after,.a0-widget q:before{content:\'\';content:none}.a0-widget small{font-size:80%}.a0-widget sub,.a0-widget sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.a0-widget sup{top:-.5em}.a0-widget sub{bottom:-.25em}.a0-widget dl,.a0-widget menu,.a0-widget ol,.a0-widget ul{margin:1em 0}.a0-widget dd{margin:0 0 0 40px}.a0-widget menu,.a0-widget ol,.a0-widget ul{padding:0 0 0 40px}.a0-widget nav ol,.a0-widget nav ul{list-style:none;list-style-image:none}.a0-widget img{border:0;-ms-interpolation-mode:bicubic}.a0-widget svg:not(:root){overflow:hidden}.a0-widget figure,.a0-widget form{margin:0}.a0-widget fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.a0-widget legend{border:0;padding:0;white-space:normal;*margin-left:-7px}.a0-widget button,.a0-widget input,.a0-widget select,.a0-widget textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}.a0-widget button,.a0-widget input{line-height:normal}.a0-widget button,.a0-widget html input[type=button],.a0-widget input[type=reset],.a0-widget input[type=submit]{-webkit-appearance:button;cursor:pointer;*overflow:visible}.a0-widget button[disabled],.a0-widget input[disabled]{cursor:default}.a0-widget input[type=checkbox],.a0-widget input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0;*height:13px;*width:13px}.a0-widget input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}.a0-widget input[type=search]::-webkit-search-cancel-button,.a0-widget input[type=search]::-webkit-search-decoration{-webkit-appearance:none}.a0-widget button::-moz-focus-inner,.a0-widget input::-moz-focus-inner{border:0;padding:0}.a0-widget textarea{overflow:auto;vertical-align:top}.a0-widget table{border-collapse:collapse;border-spacing:0}.a0-widget a,.a0-widget button,.a0-widget footer,.a0-widget form,.a0-widget form label,.a0-widget h1,.a0-widget h2,.a0-widget h3,.a0-widget header,.a0-widget input[type=button],.a0-widget input[type=email],.a0-widget input[type=password],.a0-widget input[type=text],.a0-widget span{font-smooth:never;-webkit-font-smoothing:auto;alignment-baseline:baseline;-webkit-animation:none 0 ease 0 1 normal;-moz-animation:none 0 ease 0 1 normal;animation:none 0 ease 0 1 normal;-webkit-animation-play-state:running;-moz-animation-play-state:running;animation-play-state:running;appearance:normal;-webkit-backface-visibility:visible;-moz-backface-visibility:visible;-ms-backface-visibility:visible;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;binding:none;bleed:6pt;bookmark-label:content();bookmark-level:none;bookmark-state:open;bookmark-target:none;border:0 none transparent;border-radius:0;bottom:auto;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;box-align:stretch;box-decoration-break:slice;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:normal;box-direction:normal;-webkit-box-flex:0;-webkit-flex:0;-moz-box-flex:0;-ms-flex:0;box-flex:0;box-flex-group:1;box-lines:single;-webkit-box-ordinal-group:2;-webkit-order:1;-moz-box-ordinal-group:2;-ms-flex-order:1;box-ordinal-group:1;box-orient:inline-axis;-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;box-pack:start;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-break-after:auto;-moz-break-after:auto;break-after:auto;-webkit-break-before:auto;-moz-break-before:auto;break-before:auto;-webkit-break-inside:auto;-moz-break-inside:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium medium #1f1f1f;-moz-column-rule:medium medium #1f1f1f;column-rule:medium medium #1f1f1f;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;-webkit-columns:auto auto;-moz-columns:auto auto;columns:auto auto;content:normal;counter-increment:none;counter-reset:none;crop:auto;cursor:auto;direction:auto;display:auto;dominant-baseline:auto;drop-initial-after-adjust:text-after-edge;drop-initial-after-align:baseline;drop-initial-before-adjust:text-before-edge;drop-initial-before-align:caps-height;drop-initial-size:auto;drop-initial-value:initial;elevation:level;empty-cells:show;fit:fill;fit-position:0 0;float:none;float-offset:0 0;font-size-adjust:none;font-stretch:normal;font:normal normal 100% "Helvetica Neue",Arial,sans-serif;grid-columns:none;grid-rows:none;hanging-punctuation:none;height:auto;hyphenate-after:auto;hyphenate-before:auto;hyphenate-character:auto;hyphenate-lines:no-limit;hyphenate-resource:none;-webkit-hyphens:manual;-moz-hyphens:manual;-ms-hyphens:manual;hyphens:manual;icon:auto;image-orientation:auto;image-rendering:auto;image-resolution:normal;inline-box-align:last;left:auto;letter-spacing:normal;line-height:normal;line-stacking:inline-line-height exclude-ruby consider-shifts;list-style:disc outside none;margin:0;marks:none;marquee-direction:forward;marquee-loop:1;marquee-play-count:1;marquee-speed:normal;marquee-style:scroll;max-height:none;max-width:none;min-height:0;min-width:0;move-to:normal;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:invert none medium!important;outline-offset:0;overflow:visible;overflow-style:auto;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;page-policy:start;-webkit-perspective:none;-moz-perspective:none;-ms-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;-moz-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;presentation-level:0;punctuation-trim:none;quotes:none;rendering-intent:auto;resize:none;right:auto;rotation:0;rotation-point:50% 50%;ruby-align:auto;ruby-overhang:none;ruby-position:before;ruby-span:none;size:auto;string-set:none;table-layout:auto;text-align:auto;text-align-last:start;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:0;text-shadow:none;text-transform:none;text-wrap:normal;top:auto;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;-moz-transform-origin:50% 50% 0;-ms-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;-moz-transform-style:flat;-ms-transform-style:flat;transform-style:flat;-webkit-transition:all 0 ease 0;-moz-transition:all 0 ease 0;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space-collapse:collapse;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}#a0-widget .a0-theme-static .a0-popup .a0-overlay,#a0-widget .a0-theme-static .a0-popup .a0-overlay.a0-ie8-overlay{background:rgba(255,255,255,0);background-color:transparent}#a0-widget .a0-theme-static .a0-popup .a0-panel{-webkit-box-shadow:0 0 0 1px rgba(14,41,57,.12),0 2px 5px rgba(14,41,57,.44),inset 0 -1px 2px rgba(14,41,57,.15);box-shadow:0 0 0 1px rgba(14,41,57,.12),0 2px 5px rgba(14,41,57,.44),inset 0 -1px 2px rgba(14,41,57,.15);background:#fff}#a0-widget .a0-theme-static .a0-popup .a0-panel:after{display:none}@-moz-keyframes showPanel{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes showPanel{0%{opacity:0}100%{opacity:1}}@-ms-keyframes showPanel{0%{opacity:0}100%{opacity:1}}@keyframes showPanel{0%{opacity:0}100%{opacity:1}}@-moz-keyframes hidePanel{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes hidePanel{0%{opacity:1}100%{opacity:0}}@-ms-keyframes hidePanel{0%{opacity:1}100%{opacity:0}}@keyframes hidePanel{0%{opacity:1}100%{opacity:0}}#a0-widget .a0-theme-static .a0-separator span{background:#fff}#a0-widget .a0-embedded .a0-popup .a0-panel{box-shadow:none;-webkit-box-shadow:none;border-radius:0}#a0-widget .a0-embedded .a0-popup .a0-panel .a0-header{display:none}#a0-widget .a0-spinner-css{margin:-30px 0 0 -30px;height:60px;width:60px;top:50%;left:50%;position:absolute;border-radius:999px}#a0-widget .a0-spinner-css:after{content:"";position:absolute;width:48px;height:48px;left:0;top:0;margin:6px;background:#fafafa;opacity:1;border-radius:999px}#a0-widget .a0-spinner-css .a0-side{height:60px;width:30px;position:absolute;overflow:hidden;top:0}#a0-widget .a0-spinner-css .a0-side>.a0-fill{position:absolute;width:30px;height:60px;background:#747e85;border-radius:999px;animation:cssSpinnerRight 2s infinite linear;-webkit-animation:cssSpinnerRight 2s infinite linear;-moz-animation:cssSpinnerRight 2s infinite linear}#a0-widget .a0-spinner-css .a0-side.a0-sp_right{left:30px;border-radius:0 999px 999px 0}#a0-widget .a0-spinner-css .a0-side.a0-sp_right>.a0-fill{right:0;border-right:30px solid #fafafa}#a0-widget .a0-spinner-css .a0-side.a0-sp_left{left:0;border-radius:999px 0 0 999px}#a0-widget .a0-spinner-css .a0-side.a0-sp_left>.a0-fill{left:0;border-left:30px solid #fafafa;animation:cssSpinnerLeft 2s infinite linear;-webkit-animation:cssSpinnerLeft 2s infinite linear;-moz-animation:cssSpinnerLeft 2s infinite linear}@-webkit-keyframes cssSpinnerRight{0%{-webkit-transform:rotate(0deg)}20%{-webkit-transform:rotate(90deg)}25%,50%{-webkit-transform:rotate(180deg)}70%{-webkit-transform:rotate(270deg)}100%,75%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes cssSpinnerLeft{0%,25%{-webkit-transform:rotate(0deg)}35%{-webkit-transform:rotate(90deg)}50%,75%{-webkit-transform:rotate(180deg)}80%{-webkit-transform:rotate(270deg)}100%{-webkit-transform:rotate(360deg)}}@-moz-keyframes cssSpinnerRight{0%{-moz-transform:rotate(0deg)}20%{-moz-transform:rotate(90deg)}25%,50%{-moz-transform:rotate(180deg)}70%{-moz-transform:rotate(270deg)}100%,75%{-moz-transform:rotate(360deg)}}@-moz-keyframes cssSpinnerLeft{0%,25%{-moz-transform:rotate(0deg)}35%{-moz-transform:rotate(90deg)}50%,75%{-moz-transform:rotate(180deg)}80%{-moz-transform:rotate(270deg)}100%{-moz-transform:rotate(360deg)}}@keyframes cssSpinnerRight{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}20%{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}25%,50%{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}70%{-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}100%,75%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cssSpinnerLeft{0%,25%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}35%{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}50%,75%{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}80%{-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}#a0-widget .a0-zocial,#a0-widget a.a0-zocial{border:1px solid #777;border-color:rgba(0,0,0,.2);border-bottom-color:#333;border-bottom-color:rgba(0,0,0,.4);color:#fff;-webkit-box-shadow:inset 0 .08em 0 rgba(255,255,255,.4),inset 0 0 .1em rgba(255,255,255,.9);box-shadow:inset 0 .08em 0 rgba(255,255,255,.4),inset 0 0 .1em rgba(255,255,255,.9);cursor:pointer;display:inline-block;font:700 100%/2.1 "Lucida Grande",Tahoma,sans-serif;padding:0 .22em 0 0;text-align:left;text-decoration:none;text-shadow:0 1px 0 rgba(0,0,0,.5);white-space:nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;position:relative;border-radius:.3em}#a0-widget .a0-zocial.a0-primary{text-align:center}#a0-widget .a0-zocial:before{content:"";float:left;font:120%/1.65 zocial;font-style:normal;font-weight:400;margin:0 .5em 0 0;padding:0 .5em;text-align:center;text-decoration:none;text-transform:none;-moz-font-smoothing:antialiased;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}#a0-widget .a0-zocial:active{outline:0}#a0-widget .a0-zocial.a0-icon{overflow:hidden;max-width:2.4em;padding-left:0;padding-right:0;max-height:2.15em;white-space:nowrap}#a0-widget .a0-zocial.a0-icon:before{padding:0;width:2em;height:2em;-webkit-box-shadow:none;box-shadow:none;border:0}#a0-widget .a0-zocial{background-image:-moz-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.05) 49%,rgba(0,0,0,.05) 51%,rgba(0,0,0,.1));background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.1)),color-stop(49%,rgba(255,255,255,.05)),color-stop(51%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)));background-image:-webkit-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.05) 49%,rgba(0,0,0,.05) 51%,rgba(0,0,0,.1));background-image:linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.05) 49%,rgba(0,0,0,.05) 51%,rgba(0,0,0,.1))}#a0-widget .a0-zocial:focus,#a0-widget .a0-zocial:hover{background-image:-moz-linear-gradient(rgba(255,255,255,.15) 49%,rgba(0,0,0,.1) 51%,rgba(0,0,0,.15));background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.15)),color-stop(49%,rgba(255,255,255,.15)),color-stop(51%,rgba(0,0,0,.1)),to(rgba(0,0,0,.15)));background-image:-webkit-linear-gradient(rgba(255,255,255,.15) 49%,rgba(0,0,0,.1) 51%,rgba(0,0,0,.15));background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.15)),color-stop(51%,rgba(0,0,0,.1)),to(rgba(0,0,0,.15)));background-image:linear-gradient(rgba(255,255,255,.15) 49%,rgba(0,0,0,.1) 51%,rgba(0,0,0,.15))}#a0-widget .a0-zocial:active{background-image:-moz-linear-gradient(bottom,rgba(255,255,255,.1),rgba(255,255,255,0) 30%,transparent 50%,rgba(0,0,0,.1));background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.1)),color-stop(30%,rgba(255,255,255,0)),color-stop(50%,transparent),to(rgba(0,0,0,.1)));background-image:-webkit-linear-gradient(bottom,rgba(255,255,255,.1),rgba(255,255,255,0) 30%,transparent 50%,rgba(0,0,0,.1));background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.1)),color-stop(30%,rgba(255,255,255,0)),color-stop(50%,transparent),to(rgba(0,0,0,.1)));background-image:linear-gradient(bottom,rgba(255,255,255,.1),rgba(255,255,255,0) 30%,transparent 50%,rgba(0,0,0,.1))}#a0-widget .a0-zocial.a0-dropbox,#a0-widget .a0-zocial.a0-github,#a0-widget .a0-zocial.a0-gmail,#a0-widget .a0-zocial.a0-miicard,#a0-widget .a0-zocial.a0-openid,#a0-widget .a0-zocial.a0-salesforce,#a0-widget .a0-zocial.a0-secondary,#a0-widget .a0-zocial.a0-stackoverflow,#a0-widget .a0-zocial.a0-weibo{border:1px solid #aaa;border-color:rgba(0,0,0,.3);border-bottom-color:#777;border-bottom-color:rgba(0,0,0,.5);-webkit-box-shadow:inset 0 .08em 0 rgba(255,255,255,.7),inset 0 0 .08em rgba(255,255,255,.5);box-shadow:inset 0 .08em 0 rgba(255,255,255,.7),inset 0 0 .08em rgba(255,255,255,.5);text-shadow:0 1px 0 rgba(255,255,255,.8)}#a0-widget .a0-zocial.a0-dropbox:focus,#a0-widget .a0-zocial.a0-dropbox:hover,#a0-widget .a0-zocial.a0-github:focus,#a0-widget .a0-zocial.a0-github:hover,#a0-widget .a0-zocial.a0-gmail:focus,#a0-widget .a0-zocial.a0-gmail:hover,#a0-widget .a0-zocial.a0-miicard:focus,#a0-widget .a0-zocial.a0-miicard:hover,#a0-widget .a0-zocial.a0-openid:focus,#a0-widget .a0-zocial.a0-openid:hover,#a0-widget .a0-zocial.a0-salesforce:focus .a0-zocial.a0-salesforce:hover,#a0-widget .a0-zocial.a0-secondary:focus,#a0-widget .a0-zocial.a0-secondary:hover,#a0-widget .a0-zocial.a0-stackoverflow:focus,#a0-widget .a0-zocial.a0-stackoverflow:hover,#a0-widget .a0-zocial.a0-twitter:focus .a0-zocial.a0-twitter:hover,#a0-widget .a0-zocial.a0-weibo:focus,#a0-widget .a0-zocial.a0-weibo:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),color-stop(49%,rgba(255,255,255,.2)),color-stop(51%,rgba(0,0,0,.05)),to(rgba(0,0,0,.15)));background-image:-moz-linear-gradient(top,rgba(255,255,255,.5),rgba(255,255,255,.2) 49%,rgba(0,0,0,.05) 51%,rgba(0,0,0,.15));background-image:-webkit-linear-gradient(top,rgba(255,255,255,.5),rgba(255,255,255,.2) 49%,rgba(0,0,0,.05) 51%,rgba(0,0,0,.15));background-image:-webkit-gradient(linear,left top,left bottom,from(top),color-stop(rgba(255,255,255,.5)),color-stop(49%,rgba(255,255,255,.2)),color-stop(51%,rgba(0,0,0,.05)),to(rgba(0,0,0,.15)));background-image:linear-gradient(top,rgba(255,255,255,.5),rgba(255,255,255,.2) 49%,rgba(0,0,0,.05) 51%,rgba(0,0,0,.15))}#a0-widget .a0-zocial.a0-dropbox:active,#a0-widget .a0-zocial.a0-github:active,#a0-widget .a0-zocial.a0-gmail:active,#a0-widget .a0-zocial.a0-openid:active,#a0-widget .a0-zocial.a0-salesforce:active,#a0-widget .a0-zocial.a0-secondary:active,#a0-widget .a0-zocial.a0-stackoverflow:active,#a0-widget .a0-zocial.a0-weibo:active,#a0-widget .a0-zocial.a0-wikipedia:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(30%,rgba(255,255,255,0)),color-stop(50%,rgba(0,0,0,0)),to(rgba(0,0,0,.1)));background-image:-moz-linear-gradient(bottom,rgba(255,255,255,0),rgba(255,255,255,0) 30%,rgba(0,0,0,0) 50%,rgba(0,0,0,.1));background-image:-webkit-linear-gradient(bottom,rgba(255,255,255,0),rgba(255,255,255,0) 30%,rgba(0,0,0,0) 50%,rgba(0,0,0,.1));background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,0)),color-stop(30%,rgba(255,255,255,0)),color-stop(50%,rgba(0,0,0,0)),to(rgba(0,0,0,.1)));background-image:linear-gradient(bottom,rgba(255,255,255,0),rgba(255,255,255,0) 30%,rgba(0,0,0,0) 50%,rgba(0,0,0,.1))}#a0-widget .a0-zocial.a0-amazon:before{content:"a"}#a0-widget .a0-zocial.a0-dropbox:before{content:"d";color:#1f75cc}#a0-widget .a0-zocial.a0-facebook:before{content:"f"}#a0-widget .a0-zocial.a0-github:before{content:"\\00E8"}#a0-widget .a0-zocial.a0-gmail:before{content:"m";color:red}#a0-widget .a0-zocial.a0-google:before{content:"G"}#a0-widget .a0-zocial.a0-googleplus:before{content:"+"}#a0-widget .a0-zocial.a0-guest:before{content:"?"}#a0-widget .a0-zocial.a0-ie:before{content:"6"}#a0-widget .a0-zocial.a0-linkedin:before{content:"L"}#a0-widget .a0-zocial.a0-openid:before{content:"o";color:#ff921d}#a0-widget .a0-zocial.a0-paypal:before{content:"$"}#a0-widget .a0-zocial.a0-stackoverflow:before{content:"\\00EC";color:#ff7a15}#a0-widget .a0-zocial.a0-twitter:before{content:"T"}#a0-widget .a0-zocial.a0-vk:before{content:"N"}#a0-widget .a0-zocial.a0-windows:before{content:"W"}#a0-widget .a0-zocial.a0-yahoo:before{content:"Y"}#a0-widget .a0-zocial.a0-office365:before{content:"z"}#a0-widget .a0-zocial.a0-thirtysevensignals:before{content:"b"}#a0-widget .a0-zocial.a0-salesforce:before{content:"*"}#a0-widget .a0-zocial.a0-waad:before{content:"z"}#a0-widget .a0-zocial.a0-box:before{content:"x"}#a0-widget .a0-zocial.a0-aol:before{content:"l"}#a0-widget .a0-zocial.a0-renren:before{content:"r"}#a0-widget .a0-zocial.a0-baidu:before{content:"u"}#a0-widget .a0-zocial.a0-fitbit:before{content:"#"}#a0-widget .a0-zocial.a0-yandex:before{content:"&"}#a0-widget .a0-zocial.a0-wordpress:before{content:"w"}#a0-widget .a0-zocial.a0-dwolla:before{content:"D"}#a0-widget .a0-zocial.a0-shopify:before{content:"s"}#a0-widget .a0-zocial.a0-yammer:before{content:"!"}#a0-widget .a0-zocial.a0-miicard:before{content:"m"}#a0-widget .a0-zocial.a0-soundcloud:before{content:"t"}#a0-widget .a0-zocial.a0-evernote:before{content:"n"}#a0-widget .a0-zocial.a0-ebay:before{content:"e"}#a0-widget .a0-zocial.a0-sharepoint:before{content:"p"}#a0-widget .a0-zocial.a0-weibo:before{content:"S"}#a0-widget .a0-zocial.a0-instagram:before{content:"i"}#a0-widget .a0-zocial.a0-amazon{background-color:#ffad1d;color:#030037;text-shadow:0 1px 0 rgba(255,255,255,.5)}#a0-widget .a0-zocial.a0-dropbox{background-color:#fff;color:#312c2a}#a0-widget .a0-zocial.a0-facebook{background-color:#4863ae}#a0-widget .a0-zocial.a0-github{background-color:#fbfbfb;color:#050505}#a0-widget .a0-zocial.a0-wordpress{background-color:#1e8cbe;color:#fff}#a0-widget .a0-zocial.a0-dwolla{background-color:#F5891F;color:#fbfbfb}#a0-widget .a0-zocial.a0-gmail{background-color:#efefef;color:#222}#a0-widget .a0-zocial.a0-google{background-color:#4e6cf7}#a0-widget .a0-zocial.a0-googleplus{background-color:#dd4b39}#a0-widget .a0-zocial.a0-guest{background-color:#1b4d6d}#a0-widget .a0-zocial.a0-ie{background-color:#00a1d9}#a0-widget .a0-zocial.a0-linkedin{background-color:#0083a8}#a0-widget .a0-zocial.a0-openid{background-color:#f5f5f5;color:#333}#a0-widget .a0-zocial.a0-paypal{background-color:#fff;color:#32689a;text-shadow:0 1px 0 rgba(255,255,255,.5)}#a0-widget .a0-zocial.a0-twitter{background-color:#46c0fb}#a0-widget .a0-zocial.a0-vk{background-color:#45688E}#a0-widget .a0-zocial.a0-office365{background-color:#00ACED;color:#fff}#a0-widget .a0-zocial.a0-waad{background-color:#00ADEF;color:#fff}#a0-widget .a0-zocial.a0-thirtysevensignals{background-color:#6AC071;color:#fff}#a0-widget .a0-zocial.a0-box{background-color:#267bb6;color:#fff}#a0-widget .a0-zocial.a0-salesforce{background-color:#fff;color:red}#a0-widget .a0-zocial.a0-windows{background-color:#2672EC;color:#fff}#a0-widget .a0-zocial.a0-yahoo{background-color:#a200c2;color:#fff}#a0-widget .a0-zocial.a0-aol{background-color:#0861A8;color:#fff}#a0-widget .a0-zocial.a0-renren{background-color:#0056B5;color:#fff}#a0-widget .a0-zocial.a0-baidu{background-color:#2832E1;color:#fff}#a0-widget .a0-zocial.a0-fitbit{background-color:#45C2C5;color:#fff}#a0-widget .a0-zocial.a0-yandex{background-color:red;color:#fff}#a0-widget .a0-zocial.a0-shopify{background-color:#9CC24C;color:#fbfbfb}#a0-widget .a0-zocial.a0-yammer{background-color:#0072c6;color:#fdfdfd}#a0-widget .a0-zocial.a0-miicard{background-color:#C7EAFF;color:#303030}#a0-widget .a0-zocial.a0-soundcloud{background-color:#ff4500}#a0-widget .a0-zocial.a0-evernote{background-color:#6bb130;color:#fff}#a0-widget .a0-zocial.a0-ebay{background-color:#000098;color:#fff}#a0-widget .a0-zocial.a0-sharepoint{background-color:#0072C6;color:#fff}#a0-widget .a0-zocial.a0-weibo{background-color:#faf6f1;color:#e6162d}#a0-widget .a0-zocial.a0-instagram{background-color:#25537B;color:#fff}#a0-widget button:-moz-focus-inner{border:0;padding:0}@font-face{font-family:zocial;src:url(https://d19p4zemcycm7a.cloudfront.net/w2/font/zocial-regular-webfont.eot)}@font-face{font-family:zocial;src:url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AADjsAAoAAAAAOKQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAANFEAADRR4Mwpt09TLzIAADVIAAAAYAAAAGAOkw4WY21hcAAANagAAADcAAAA3ASSBfJnYXNwAAA2hAAAAAgAAAAIAAAAEGhlYWQAADaMAAAANgAAADYDlXNOaGhlYQAANsQAAAAkAAAAJAl8BaZobXR4AAA26AAAAKwAAACspNUDyW1heHAAADeUAAAABgAAAAYAK1AAbmFtZQAAN5wAAAEwAAABMOrQjR1wb3N0AAA4zAAAACAAAAAgAAMAAAEABAQAAQEBB3pvY2lhbAABAgABADv4HAL4GwP4GAQeCgAJd/+Lix4KAAl3/4uLDAd/MBwF5/pcBR0AAAEKDx0AAAEPER0AAAAJHQAANEgSACwBAQcNDxEUFxodICMmKSwvMjU4Oz5BREdKTVBTVllcX2JlaGtucXR3en2Ag4aJem9jaWFsem9jaWFsdTB1MXUyMHUyMXUyMnUyM3UyNHUyNnUyQXUyQnUzMHUzRnU0NHU0NXU0N3U0Q3U0RXU1M3U1NHU1NnU1N3U1OXU2MXU2MnU2NHU2NXU2NnU2N3U2OXU2Q3U2RHU2RXU2RnU3MHU3MnU3M3U3NHU3NXU3N3U3OHVFOHVFQwAAAgGJACkAKwIAAQAEAAcACgANAWACXAPcBJsFDgYVB2kIGwjACbQLxw0ODbgQIxMXE9MU5xY2F2IZdRr5G2Eeax64IHYhpSJHI9ol7SbfKDko1inWLB4u8jBeMVEycTLf/pQO/pQO/pQO/JQOo/m5FY+jop6ki6CMoH6Ud8X7J8X7J8X7J42NjY2LjsL3I8P3JMD3JJaiqZejgaODmW2Dcjz7VT77Vj37Vgh8ZXpjcWp4c3F4boJlf2KLZJBzj3qkj6OOnJianJCYj5mHmIukiqWRnpuhnZellaQIj5iSl5CXipGIkImQRPdARPc/Rfc/h5aJlo2XCPm1TxWhkqZ/lXaVdoVvd35bcVlyWHVvgHCAboJ+iH2Hfo2IjIaMi46LkpCQjpCcn5+bn5sIrqivpbCloZmfm6KXCOj7pBWajJmOmoqkhpxxh3OJc3V3c4xXjFeMVpBsjmyPbZJ/joCOgJGHjYiPiI+Qk5SNk44IopOjkKOPwpXCksOQCPvb+0EVko2SipOKpIejgqKCyHPGbsVtnIOVd4p5ind9eXmFfoZ8i4CTZaNmpWelaqRqpG2oCIOTg5KGlYiOi5KQjQgO+mj52BVN3SOj+wBpaIBih2eS+6zH+377I0P7qoh9gX6Efotmi2aLZpN4lXiQd8X7hPdn+yX3lKT3daH3Q/ddlPeACIy4nbuis8LpjOxM3gj8Iv2uFfs+WvtQ0yj3LCf3L5b3UfcJ9yP3AfcY90q/9ylNiFp+dE2U+1Gk+y/7FHH7V3b7L/cc+z73NnX3T3L3L/cMqfdTlMaLi9iKCIn7avsC+yz7TlUI91b4RRX7BYsu5ov3A4r27fD1jfcAjvUhiPsBifsDLTH7BIwIc/f7FSx5YlOKO4s2uFPneIv0i++L9wEIvfvIFeuju8WF3IXaWL06kIsoiyiLKAgO+Rr3gRWLs6qpsouzjKxqi2WKZWtsZItji2ypi7II9+73XBWLZGxsY4xli2urirGLsayrs4qzi6hui2II++73XRWLs6uqs4qxi6xqi2aKZmtrZIpki2uqi7II/Pr7XBWLs6iotIuyi6ttjGWLZWtqY4tli2uqi7II+PqLFYuzqai0i7KLq22MZYtlampki2SLa6uLsQj7oIoVimVsbGWLZItprIuwjLOrqbSKs4uobYtjCPcZ0RW0i6ttimOLZWtsZItki2uqi7KKsauqsosIjPebFWWLa6qKsIuxrKuxi7CMrGuMZotkbGxjiwiL/bYVZIxrqYuxi7CsrLGKsourbItmi2RrbGSLCNL3ohWLZWtsZYpki2qsi7CMsKyrsIuyi6tri2YI++2KFYuzqKm0i7GLqmuLZYtlbGxki2SLbamLsgj3pvhqFbKLqm2MZYtkbG1ii2SLbKqLsYyxqaizjAj7YPsdFWSLa6mKsYqwrKuzi7OKqG+LZItjbm5jiwgOb4u9Ffdb+iT4VIsFrYushat/q36oeKVypHGda5VklWSLXYFWdy5fQkdWR1U8cS+LCPtPi0r7w/ubiwXx+wQV95yLy/fC91CLBeeL26bOwM/At9Sf6J7nfdZaxKJZj1F8SXguX0JHVkdWO3Awiwj7UItL+8L7cYsF95D4rxXgi7b3T/cUiwWMi5GKlYmGn4Cbe5d7l3iRdYsI+xSLBdP7jRWrjKqYp6Ooo5ynk62LjIuNjI6MjouNi4wI+wmLBQ75PPonFfsfiwX7HYv7ByCL+2OL+xDDMO9eCPtP++4FhYCRgpWLCOKLBZKLkI6NkQj3PffnyIuL++cFi4ePhpCLCNaLBZKLjo+LkQiL+ikFi5SGj4OLCDr8kxVYiwU7iz3Hi/cqi/cx1MrViwjJi4v8QgUOi/ljFYuckJuWmZaZmZScjwj3XrsFYFp2UotJi/sS4Sr3QUiehJ2DnYGdgp2An32efZt7l3mXeZF4i3iLbX90c3tze3CCbIsIY4tik2CaYJtnn2+lCDr7SwWxdrx2x3eEiYGIfId8hn6If4mAiICKgYt6i3uRfZV9loKZh5wI+zz5VAWKk4qRi48I+EFcFYull5+jmaOZpZKni6yLsYW0f7V/qXudeAjK90IFTatMoUmVjYuaj6mTqJSjkZ+Pno+ajZSLnIubhpmAmYCUfY96CPc8/VQFjIOMhYuHi3qGe4B9gH19gnqHCPspaAWru5u/i8OL13PJW7xbvEywPaX7CbJRu4vDCA73UIv3DhWLx6nAyLnIutSi4YsIw4sFbqZ9qIuri5+QnpafhIqBi36LRItRoV64Xrd1wovMi8mnwcO5w7rKotOLCPfSi0RYJosFrH+kc51pnWmUZYtii0ttVE9ccnd6e4SAg3+HfYt6i36Vep13nXieep19tW6obZtsCJtsk2WLXItOb1VTXlNeP3QsizCLPpxMrUytbLiLwwj3B60Vi1yfY7Nqs2q8eseL3IvGmq+psKmds4u9i5iKloiUiZKIkomSiJGHkoWRhpKGkIeQCIePhJGCkoKRhJCGj4aOg5F/lH6TgpGGj3CTcY9xi06MVXtdal1qdGSLXgjO+NEVk1WfXK1krWSweLSKtIqrnKOwo7CTuITBhMF3uWmxabBmn2KMYoxrenNnc2eCXpJWCPjNchWLvvdgi4v3Yb+Li/th92GLi1j7YYuL+2JXi4v3YvtgiwUO+Of3yRX7O4t0Pfsqi/dH+G73NIv3Rvxu+y2Lc9kFbPIVV/c+V/s+84sF+GObFYv7svt8+337s4v7sov7ffd9i/eyi/ez9333fPeyi/ezi/d8+3yL+7MI/Jb4FxX7a4v7QvtCi/tri/tr90L7Qvdri/dri/dC90KL92uL92v7QvdC+2uLCIpmFftWi/sy+zGL+1aL+1f3Mvsx91aL91aL9zL3MYv3V4v3Vvsy9zH7VosIDvuEjfcrFYuaj6GTqJvGqcG2u7a8vq7EoVW2cMKLzovFoL22tLa0vaDGi8aLvna1YrZioFmLUQiLSHFVVmDUccdgvE67TqNHi0GLTHJnWoKIhIeChICHgIOBf4N/gnuEdYZ2hXqHf4gIfol4iHGHcYh+iYqLiouIi4iKh4qJi4qLCPsPiwVoi1+RVpZVlm2ahJ9/loKZhp16jn2Sf5ZxlX6oi7oIDvwci+gVi7+esbKkn5ielZyS2Ky1npGOfKB5onSlaLR3o4WSQOVr4JbZj7GaqqOjk5Walp+XCKSampORjo6Mk46XkZeQlY+Tjgi7odKqBbKcqZielpiSlImOf4uEgoJ5gmFwdWSJWIt3jHiPd494kHuPfpB+k3yYeJh4lH6RhQiQhJd9nXeddpZ/joeQhpSAm3mbepZ+koOSg5R+mHmXeZR8kH2RfZB7kHeQeI53i3YIi3KGc4J3g3WCeX9+gH57fXZ+c3x5gX6FfIN2gnGAgId/hn6FfYWEh4mLCC9jZ3gFdYB6hH6IUX1ek2qpaqp7tYvACA77PIv5GxWLppCflZeSlZOSl5CXkZuOn4sI64sFlouTj5OSk5OOk4uWi5mLmoqbCIvHBYucj5qUmJWanJWjkpKPnY2oiwieiwW0iqyFpoGlgJp2kGudjJuLmouvi6qJo4jNg7eDoYOogp10k2aRZZJEkCGOTo1Zi2MIi22Kc4l5gPsKfDV5U4FugnOBeYJ5gX2CgIKAfoN8hnuHfYh9in6Kd4pwi0KLWZRxnAhynX6vi8KLqo6jkp2RnpaXm5OckpqQm4yVjJmLnIsIqIsFjYuNi4yKjIqMiYqJioiKiYqIioiKh4qHioaLhouHi4WLhY2EjIWLh4uJiomJioeLCHaLBYuLiIuEi4SLiIqLiouLiIqFioWKiImMiouJiYmHiYeIioiMh4yIi4eJh4uBjIOOhQiOhY2GjoiNh5GJlYqViZOLkIsIrIsFsoukj5aUlpWQoIuti7+Frn6df513lnGPT5FjknWSZ5l5s4vPi4yKjIqLiYuKiouKCItdhWJ/ZwiCcgWEen6DeooIhIsFe4t5jnaQNJZIm1qge5N+mIOff6N/t37Lf8uDuIemiKKKnIuYCJH3DhWLjfdQ90wFi4yLi4yLCIeFBYR9h3uLeIt8jGeLVIuEiIiEiwgsiwV0i3aHeoSIiYiJiIoI+Nr7vRWZjZuMnIuqiqaFpH+LxXapYYwIiIsFd4t8hIF+gXyFeoh2CA78AIv3DhWLx6nAyLnIutSi4YsIw4sFbqZ9qIuri5+QnpafhIqBi36LRItRoV64Xrd1wovMi8mnwcO5w7rKotOLCPfSi0RYJosFrH+kc51pnWmUZYtii0ttVE9ccnd6e4SAg3+HfYt6i36Vep13nXieep19tW6obZtsCJtsk2WLXItOb1VTXlNeP3QsizCLPpxMrUytbLiLwwj3B60Vi1yfY7Nqs2q8eseL3IvGmq+psKmds4u9i5iKloiUiZKIkomSiJGHkoWRhpKGkIeQCIePhJGCkoKRhJCGj4aOg5F/lH6TgpGGj3CTcY9xiwiHiwVQi1Z7XmtdanRki14IzvjRFZNVn1ytZK1ksHi0igiPiwWyi6mdo66dqJSti7KLlYuXiZeEwXe5abFpsGafYowIh4sFZItsenRoeG+CaYtki4CMgIyACA6zhvnbFYutl6ejoqOhqpaxi7CLqoCidaN1l22LZ4tqf3B0dXN1bH9kiwiKiwVli22XdKFzooCni60ImP4UFYv5QPd4i4v9QPt4iwX39YsV93iLi/gSBYujjp2QmJWjmZ6fm56bo5Opi9eLsViLJAiL/AL3eIuL+BwFi/Bz2Fu/W79Mpj2LM4tGZVo/CIuJiouMjYvs+3iLBY11jEeL+waL+waK+zSJ+2IIDvdugvl0FZKQk4+VjpWOk4yTiwiUiwWSi5OLlYqaipaLkouPi5iMoIyWjJWLlIuUipOLkouYipaIk4eQiY+GkIWQhI6Ej4UIjoWPgo+AkICPg42IpVOrU7FUjImOh46GjoWOh46IjYiOh4+Gj4eOh4+IjoiPiI6ICI+Ij4mPi4+Kj4uPjJ+OlbON14yYi5eLlou+hq6BnoeShpGEkIWPgo+Bj4GPg46FjwiVnpyXo5KjkayOtYsIwYsFi4uUi52KnYuUiouJCKKGBYuLkoiYhJiFkIaGiJF/j3yMe4uGi4eMhot9inmJdYhvinmLhIl8inuLe4t/i36NfQiObZV2nYCRi5CNkI2RjZCPkJCRkY+PjY2NjY+RkZSSlI6PjIyrtavDq9AIlaIFi4uPlJKdk52PkoyGi4aQkJaZlZCYjZqLCJWLBZiLm4qdiqGKm4qVi5GLlIuYjJiMlouUjJWLlYuWipWKlImSiJGIkIaOho2HjIaLhgiLeH9tc2OAd396f3t/ent4eHN4dH97hIOKiYaFg4CDgIWDh4WHhoeDh4GHgoqCi4IIi4aMho2GjYaPho+GkIWOh42IjomPhpKFkoWPh4yKvF6xY6dopmeZcot7i3V6fWiFCHmIeYp5i3yLfYx8jX2MfoyAi3mLfIl+iAiEiwVek1yrWcOIjoaSgpaCl4OThZGFkoOQgpGBkIKNgop7iIGBhnqGeoh3inOJdIh6hoIIgnpwg16LeIt0jHGOVpFbmF+hYKFponGjcqRwqm2yROZH9wJM9xWJj4eShpeFloeUiJEIiZGHk4iVh5WIlImVipSKlIuUCA73hIv3oRWL9wLK9wr3EfcT29rcw9yqsZusk6eLqoukgZ15nXmUc4tri3aHcoJviYKMhZCJj4iRi5GNCJWPBc2mxZm9i76Lr32hbpV8kHmLd4t2hnKAcIaEioWOh46GjoiNio6JkImSibZ+r3apbgipbppmi1+LY31ib2FvYWVlW2hbaE5uQXVCdD2AOIsyizeYO6U7pkmyV79Wv3HHi84I9xRaFZJGtVTaYspp0nvbi5+Ln4ygjfSV4qzRw8m+q8SLyIuRipGLkYTQYME9tEutRJs7iwh3i3eKdolGhU15U29Tb2BpbWJxZ35li2WLhYuFjIUI9zhLFYKfh5+LoIuikaOXo6C3r6y8oaqYqpKri52Lnomdhr99sG+iYZZ1kXWLc4t1hnWBdQh1WmZoVnRtfm2FbYt0i3SPdJJZm2moeLcIxJ8Vj3qWf5uElIeUiZWLk4uTjJOOnpGalpWckpWOlouWi5CKkImRh5uBl3uRgo+CjYKLCIOLgomCiHmFfYCBfISAh4CLf4uGjIeMhwj3JdwVjYSPh5KIjoqPio6LjouOjI6Mk46Qj4+SjpGMkYmRiZGHkISNhY2Fi4SJg4iGh4iFCImHioeLhwiLhQX33PkPFYuPio6Lj4uUjpOQk5KWlZKYj6KQo42ii66LrYasgcR4vGu0XrRepVeXUJBzjnSLdAiLaIVqgGsIi4oFh36DgoCFg4iEiYOLhouGjIaMfo+Ck4WWiJOJkouSi5CMkYyPCIuMBZOjjqKLpIubipuInIK2eLBuq26raKFimHSSc49zi3qLe4l6iIeKiIuHi4KLgo2DkQiAkoSViJgItPs0FYuOio6Lj4uSjZKPkpGVlJGXjpiOmIyXi7mLsnmsZ550mHKSbo1/jICLgIt7iHqFewiIgISDgYaFiIWJhYuGi4aMh4yAj4OShpWIkYqRi5GLkIuPjZCNlI2Ui5OLnoOcfZoIfJ15lHWLhIuEioSKiIqIi4iLhIuDjYWQgZGFlIiWCA73fouxFZ+JoIqfi/cNi/aw6dVTjFmcXqxfrW21er+ZiJuKnYuji6KOoZFPl1moZLtkunfCi8kIi44Fr3ezgLWKZ6NvqXaxd7GAtIu4i7mXtqO0yzvaS+dc6FvucfWFhqKIn4uci9Klx72+CL69yKXSi9aLym++VcaXwqC9qXhNZVtTar2RvJm8oGpYYF5XZQiLaQWLRoBGd0Z3RWxJYkxiTFpTUVlSWkZkO247bjR9L4v7Iov7GLH7DtgIDvcoi/lBFbG3sLOxrbCurKamnaedpJmhl6GWm5KWjwicjwWTjJSMk4uYi5eJloechJp/lnqWe5V4lHaTdpNzkW6Rb5Bxj3KPcpBwkG6QbZBzkHgIoTacTplomGeZeZqLnIuhnqixqLGrvq7NnayUqouoi5SKk4qShK56oW6UhI6DjIKLCHOLb4JqeprjudPXwcW0xp/Ii5OLlIuTitCGu2ykU5dxkm2LaYt3iHaHdX9Gc0RoQghoQ2RLYVNhVF5WW1laWGFjZ25nbW10cXpuenCDcotyi3SSdJp1mXebfJ57nX6fgZ8If6Vp8VX3RlX3Rmrqf5mLjImNiYyJjIaNhI2EjIOLgoqBiX+Ge4N8hHp/eH0IDveCi7wV9wD4EAWimKmWrZKuk6ePoo0IrYwFrouuh7CE0H68dqhvCCH8DwVynnCbbZdul3OSeo0IcY8Fc411jHaLgIt9inmKeYpuh2SCZINtgHd9CPcV+HwV9wD4EAWimamVrpOtk6iPoowIrIwFrouviK+E0H28dqhvCCH8EAVyn3CabZdul3OSeo0IcY8Fc411jHeLgIt9i3mKeYpuhmSDY4Ruf3Z9CPhN/KEV9vgQBaR4p3uof6l/ooSciQilhwWiiaGKoYuWi5mLnYydjKiQspOyk6mWn5kIIPwQBXN9boFog2iEb4d0ighpiQVpi2eOZ5JGmVmgbacI9w/4ehX2+A8FpHime6l/qYCihJyICKWHBaKJoYqgi5aLmoydjJ2MqI+yk7GTqZagmQgg/A4Fc31ugGiDaINuh3SKCGmJBWiLaI9ok0aYWaBtpwgO+BiL+dYVkXgFjoaNiI6IjYmNiYyKCI6JnoH3Bov3uvv0BZKCj4OLggiL+1kFi4aKh4mIioiJiomKCIiLBT6LW4p2iYSLiIiLhQiLUviki4vGBYuNio2KjImMiYyKiwj7KYsFhIuIkIuVCIv3YwWLjYuOjY2NjoyNjo4Ijo4FkpLl4PdB9zcI9xyLBZGLkY2SkAicngWPkI2Ri5MIi5kFio2KjYqMioyKi4qLCPxVi4SFBYuHi4eNho2HjIiNiAiOh6J0nYT3Cov7aPtc+333vrWLBZSKko2RjgjRoQWMi4yLjIyMi42NjY6MjYyOi48Ii5kFi42LjYmMio2Ji4qLCPyMiwWGi4eIiocIi4MFHATD9wQV91GDNvzYTY4FbvtZFY/3BfcFh4f7BQUO74z3PBWOkZGLkob3Pyj3Tlr3XIv3Gov3GKT3F72OjJCNko6RjpCNjYyWj5OJkIORg4mDgoR/gnuBeIAIUGhKcEJ4Q3hEgUaLIYsmniywLLA2v0DPh46Jj4uOi42MjYyNCPfI97gVi7qXtKKsoq2rpLOcsJu5lsCSno2pjbWPCIucBYu3hqiBmn2gdJVtiwiCiwV1iXiEen97foB6hnWJfoSDgIkI+wqZBYCOhZGLlYuNi42MjpbIqLi4qLmowJzHjgiliwXZi8h3tmOShJKDkISRg5CEjoWPhY6CjX+Of42DjIeNh4yBjHyLfYyCi4gIi/uMBYt6jXqQfZB8kICQhZCEk4GWfY+FjYWLhouGiIaGh1JabHCGh4OFgYqAkIGTg5OEkwiEkoWRiI6IjoaShJWFlYaSiI5lYWVxZoF0hG+IaItXi2Cbaaxpq3q5i8YI90SgFYtwknaYe5l7nYOhi42LjouPjI+LjYyMi6iSoZ6bqJOYkJmPm4+ajZeLlYuUjJuLoQiLpQVji22IdoVPem1li1EI+EL73hWNjo2Ojo2cl5uTm4+lkqSOpIyRjJKKkYqqiJ2GkYSOh4yEi4MIi4QFi3OFb35rfmp5cXR3h4mIiYiLiouKi4mMh42Kj42QpceXtIuii5OKkIiPhJN4j2yLCH+LfYp8inqJe4l9iYeLiIyJjIqMi42LjIuMjIyLjAgOs/dfFZOBkoCUgZx4nXmge7ZpvXO/esh3yoHJhdWF1YvTk8+SzpnKpMOiv6q4tJeVlpaUmAiTlpGWjJmNmoibiJuInIach5uJkoqRiZF71HLSaM1uw2fAYrtkt16yV6dvmm6XbZQIe5B7j3qPh4uGjYeLhouFi4aLgIuAi4GLhouGi4aKh4uGioeKg4qCiYOJeod7hnuFCGx/bXpveFVlW1tjV2FTaUxxSnBGeEN/QYmBiYKLgYuGi4aLhouIi4qMiYyJjIqMiQjPuRWMkIyQjI+NlI2UjpSXrZ2qnaqVmpSalZqUmpWalpmdoqKkp5W0mKlgo3GYfZl7noMIk4eUiZWLmIyXlZWTp6KhqKGno6uhq6anlpeXmpuQko6TipKIj4mOiY6IjoePiY+ICKh1pnKkcaF1oHOfc55znnObcJ9rm2mea5ttnGh7aYqJioqKiW1ZVmxWd0xyR39IhwhFhkSLRpJMkUyWT6JanlunarWDlYWWhZaKjIqNi4yKjYqMjI0IDpd/+DQV92/3O/tv9zr30vdk92T7Rvdp90b3yfta+177Pfde+0L7zvtR+2T3NPtk+zQFJ0cVi8brUvdk9zOMiov8AAX7wPkKFffB+1H3w/dc+8H3QgWI/cMVjPgAjYz3Y/sz8cmLSgUO+DWL98YVi6CNnY6aj5uSm5ablpubmaCUn5WolK+RsJK3jr6Lx4u9hrSCpoafhZiECIv7OfvAiwWLfYt/jYOMgo6BkH+QfpSCmIWYhZyIoIvFi6igi7QI9xCLizAFeIJ4hXeHXYBYhlOLTItXkGOTY5RtmHideJ1+noWfhKCIpIuqCPdfrRX3SosFi5iLlImRipCJk4aWhpWCkn2QfZB4jXWLdot5iX6GfoaCg4aAhoGIgoqGioWLgouACPfA+04Vi+bbiwWKaHJuWXKKiomKiosIi4sVjIuNjIyMvaSkqIyuCDuLi7PeiwWLk4yTi5OLqYalgqGBpXOgZ5sIi/dP9wGLi/tjjYsFoampmrKLqIuigp15cHd9aItai0SlYb9/inWJeYh7iHyGe4R6g3uAfnyDfYJ4h3WLCGCLbJx4rQiKi4tgIouL3AWL9xcVi/c5Ba97o3aVcZR1kHGLbYuDioOLgwg4iwX3AYAVi1aOZ5F2kXaXgZ2Ln4uXlZGgkaCPr4vACIuQBYujip2KlouWiZiImYmZhpSFkYSQgo5/i4CLg4iEhYWGhoCJfYl9iX6Kf4uAiniLcgj3DtEVi7yZrqafl3+UeZFzkXOOeIx9jH2LdYpuCItWBVeXcbWL0giT9zYVi7qZrKaco5ytlLmLjoubiqqJCPcC+3OLIgWLgot+jXqMeYyAi4UIJIuGwImLBXVjaHhei36LgouGjAiLwAWLqIuhi5mKmYiehaOFo4Kdf5eln7mVzYsIpIuLqgWLn4iahZSFlX+QeYt5i4CGhoCGgIl8i3cI+wKLBe/7MRWLYJl2p4uUi5KNko6RjpGQj5GPko6RjZGOkIyUjJWMlouTi5CMkYuTipaLlouSi40IiIuFi4OLgoqFi4mLCHyJBYuLh4qBiYGJiImNiY6Kh4iDh4KHiIeQiI+IioWDhIOEi4SShQjP994V9zKL8fuB9wT3gfcmi/tV/AOL+1f7JIuL91df5ovoBYuxg6h9oXygbplfkQiLixW3hah9mnaZdZNui2UIiy4FDvtQ97P4MRWL91j3MYuL7QWL0qLHur25vcKkzYsI9zGLi/tY+zGLBYGLgoaCgIN/h36LegiLJ/dZi4v7WPtZi4v8bvtZi4v4bvsxiwUOS4vrFYtgoGa1bLZsvnzHi8eLv5q1qraqoLCLtou2drFgqWGqV5pPi4qLiouKi4qLioqKiwh7moKci5yLnJSem567jrSdra6srpy0i7uLnomchpqej5qPlpIIi/cJBWp2ZoBhiwiEiwVsoGiVZotXi2B6Z2dmaHlgi1iLa5Rtm3CbcKF1pnp4c4Jyi3GLcpRxnHFsfXJ4eXQIeHOCcotvCPcQ+E4Vi6KSnpqbmpuck5+Ln4udg5l7mXuSeIt0i3WEd317fXt5g3eLd4t6k3ybfJuEn4uhCI78ThWLnZSbnJecmKGRpIuki6GFnX6cf5R7i3mLeYJ8en55fnWEcotyi3WSeph6mIKai50I9+f5pBWLopOfm5ubm5+Toouii5+Dm3uce5N3i3SLdIN3ent7eneDdIt0i3eTe5x7m4Ofi6IInv0qFYv4fvcei4v8fvseiwX3TvgWFcOLi/u4BY52kXqWfJZ8loGYhJiEmIaYhpeHlomTigifiwWei5uOmpCakZaQj5EIkpSO8AVug3WGe4uIi4eLiYx7jYKRiJQIh5gFi42LjIqMCIv3iOiLi/Mui4vq+xKLiyxTi4sjBQ6G+WX45hX3vouL/F0Fi/sDMDH7A4sI/PyLBfsDizHli/cDCIv4Xfe8iwVtYXlXi1KL+yT3CfsI9ySL9ySL9wj3CIv3JIvEeb9ttQj3vvc5FYv7GfvZiwVcu0mpQ4tCi0ltXFsI+9eLi/cZBYvOrce+sAiL+220i4v3gwWVj5WOlY4Ii/uNtIuL95IFjIuNi4yLCKOLi/uStYuL95L4uosF9wOL5jGL+wMIL98Vi518mnmLCPsBiwV6i3x8i3kIi/sDBYt5mn2ciwj3AYsFnYuamYudCIv3AwX8//wkFYvHpcG1sJqYnJadk6SXp5Gpi6iLp4Wlf52Dm4CafrVmpVWLT4v7AjEx+wKL+wOLMeWL9wIIwIsViznNSd2L3YvOzYvdi91IzjmLOYtJSIs5CA74dPnD+PUV+xSLKieL+xCL+xbwLvcQi/cRi/Doi/cWi/cQKu/7FYsIi/sLFcOMuFyLUItRXlxTi1SLXbqLxYvGubnCiwj5F/uOFYtgaGhgi2CLaK6Ltou2rq62i7aLrmiLYAj7d0sV+w+Li/i/9w+Li/y/BRz7TIsV93T4v/cHi/dw/L/7MItx2vtWi3E8+zGLBffn91YV+weLxfdOxPtOBQ74e/lM+eYV+8lh+5ZnhYlsg25ze26DeoZ8ineLe45ur/uYpftRmSaOhJ1XuWnBi5WL+s73JruTxZS5wYvGCIuaQfi3hqSFpXiodZtynHSSbouBi/thcPv/WQj35WMVrICWXnRwfXx2hnaRfo59mYeZhaCPnZmZmpqej5+FCPeVixWsgJZec3B+fHaGdZF+jn2Zh5mFoI+dmpmZmp6PoIUI/fn7OhWugqpynGgIkX6SlgWVmaKjmpaalZ6TnJCcj7aLnIfAfK5kmk6Ta4yDi/sqCIv7IzmLivcmBYr3JYuNh5l/tnSjaZJ1j3CHeH54f3hzg3OHf4uLi/soCIr7KTqLivcpBYr3JouOiJmCqHuidpVonWKEbGx/foJ+gnUIh4GJ+7s5i4r3bgWK9wyL74qMio6Qi6uMCLCLjHcFjlmLio6Qrb+5o8aJmIuZiZGJCPkR+3YVi/txN4uK928Fi/cNi+6MjYyNlIuriwi1iov7cQX3lIsVi/txN4uL928Fi/cNi+6LjYyNlIusiwi0iov7cQUO+zuL+RgVi6aQn5WXkpWTkpePl5Kbjp+LCOuLBZaLk46Tk5OSjpSLlouZi5qKmwiLxwWLnI+alJiVmZyWo5KSj52NqIsInosFtIqshaaBpYCadpBrnYybi5qLr4uqiaOIzYO3g6GCqIOddJNmkWWSRJAhjk6NWYtjCIttinOJeYD7Cnw0eVOBb4JzgXmCeYF9goCCgH6DfIZ7hn2JfYp+ineKcItCi1mUcZwIcp1+r4vCi6qOo5KdkZ2WmJuTnJKakJuMlYyZi5yLCKiLBY2LjYuMioyKjImKiIqJiomKiIqIioeKh4qGi4aLh4uFi4WNhIyFi4eLiYqJiYqHiwh2iwWLi4iLhIuEi4iKi4qLi4iKhYqFioiJjIqLiYmJh4mHiIqIjIeMiIuHiYeLgYyDjoUIjoWNho6IjYeRiZWKlYmTipCLCKyLBbKLpJCWlJaVkKCLrYu/ha5+nX+dd5Zxj0+RY5J1kmeZebOLz4uMioyKi4mLioqLigiLXYVif2cIgnIFhHp+gnqLCISLBXuLeY52kDSWSJtaoHuTfpiDn3+jf7d+y3/Kg7mHpoiiipyLmAiR9w0Vi433UPdNBYuLi4yMiwiHhQWEfYd7i3iLfIxni1SLhIiIhIsILIsFdIt2h3qEiImIiYiJCPja+70VmY6bjJyLqoqmhaR/i8V2qWGMCIiLBXeLfISBfoF8hXqIdQgO34v3wRWKtpSynLCcr6KqqKOno6qhrp2tnq6arZaulaqUqJKokaKQnY0IpY6L+xIFZIhohWqAa4Fwfnd9dnx5fHx6e3p/e4N7g3uEfIZ+h36IgYqDCIl+BYmBioGLgYt8jXyQfpNzmHidep17n3yifaF9on+jg6OCoYSfhZ+Fm4aXiQieiIshBUmST5dWnFWcYJ5qoWqgb6JzpHOjeqSAooCjg6CFnoWdiJuKlgj4nfvsFYv6MPcm74v+RAWt+KEVkYsFpYulhaWCqIChgJqBCKB7Nmj31TuL94/7AkwFcKllolmdWp1glWePCFWQi/sKBQ73MvgY+gYV+ypw+w91iouLi4r7QIv7aIv7lYz7Eo2LjYv4RT73C3YIlImL+lqCiwWGi/sTdPsqcAiy+3sVlImWiY+JCJKIizl+kwV9lHGTfYthi3Zepm2RhZ19nIDAZ59vjl6OVXdiY3h8hYeKaYtkjH2Oc5kIgpGL3pp9BZ17oYKiip2LlpCUl5CTjJCKl4mggZhponuVeJqEklTDmfLNraOXr4+shgj36PciFXuFgoWEg4iIi3iLWwiLSpaCBaV2sIaomJSPl5KQkAiTk5+BBap7r2abawiXc4WEBWxkilqqYwiSgn9zBXxucW9weW54hot9l2umWYlqcAiCg4v7F5SDBZp8nYSmi6iMmpGgoJ2ek5+MpgiLnp2VBbagtLWjuQiWopeJBaeIsZ+cpq3AcdRPnX+PgIyDigh/ioOcBXS7ZbRbpAh3l4qdBYu/ZrNYjXmMhYp+hQgO9+r5ShW7cbV9qXCrbpyOq6SrpbOauaSG+xuo+xA1+wFHNmOFRdtzpnirfaxn457phvYI+5j8UBX7E/c04veE91WopPtQdfs3+zA9CPlF+EMV909h4PtjKfsyfHSAiHWaRLtgz4HdgtKS1YvWCFP8BxWuYLFcs1tCa0CJP62zvbG6rLQI+8z7HhVDakCMQKuyu7C6rrWsYrBetFgIDlv4Fvo2FVhxYVJuOQh1UFR5BUl3lKBz+1SDR3v7D4A5gDiFRY+Ijoj3E3H3LW8I96hX9yusBfcJpKyVi5SLkoHWfuB/4XT3LXzxfPF95YmViJmDjmePZI6BkG+ncKaDjneHdoeHjYaaCIKnY7NwkX2NeJSBk3KfcIpbcwi8XxVscXZnflmDboeGb4R5h3yIiI6GkJ3AnaqsxbiusYsIoYtvcgXO+7YVjoiHcoJtfWKEgYKOhY51j3eNXJBue4tqi3iTga1y0VikXoRNgCU5Viapc5JumH6WCHSfi4uWr5m4i4yhfe5KxdQu1WCrfKqLvYz3AeHT9wyEpoqlho+HCA73MYv3nRWLloyajp6Nno6Vj46PiI+AjneOd419i4KLgYl9iHeIeIeAh4mCkIeki7kIzYsVi5yMpI+sjq2NoIyTi4+NjY+LjouNiYyHkzOPXYuHi3qJc4hrh2uJd4qDioaJiIiLCIeLiY6LkIqSiZ+Iq4esiqOLnAjdixWLm42kj62OrY2di4+LkY2OkIuQi46Ii4WTPo5fi4GLgIhdgziLhoiIhouGi4mOi5AIi5CJn4iuh6+JpYudCOqLFYuli6aMqIyojayMro2vjKeMn4uSjo6Ri5KLjoiLhIyAjWWOSo5KjVmLaYt5iXGHaAiIaIl3i4aLhYiHhIuFi4iPi5GF5oi5i40I64sVi7CMwo3SjdKMt4ycjJOQj5GLkouPh42Di3WNXY1GjkaMV4tmi3qKcohriWuJdouCCImCh4eEi4WLho+KlIuSip+JrIisiqSLnQjsixWLpoyoi6qMqYyujLCMsYyoi5+NlZCRk4uTi5CFjIGMd4xujGWMZotojG2MbItui3AIi4mJX4czCIuMBYqAhoaDi4OLhpCJlYfjibeLjQjtihWLjY33DI/3gYyXkJKVi5WLkISMf5D7gY37DIuJi4qJYIY1in+GhYGLgYuGkYqXh+GJtouMCNz3bRWLxIzAi72LkY+RlJGUkJePmI6XjZeNloyVjZSLkYvNi8VzvFm8WqZOkUKelJ6QnYsIs4ute6dsp2yaZYtfi199ZW9sbmxpe2OLCPwmiwWHi4eNiI+Ij4mQi5CLsIvAi9CLz4rKi8MIDjON+OEVjqSQoJOek52TmZWUlZSUkpWQlJGTjpGMCJSNlIsFqIulfqNzpG+ZcY1xjoCMgIt/CIuFBYt9iXmHdYd0gnd7e3x6d4BxhYKJg4qCi3uLfI9+knaVfJqBnoCehJ+Hn4iXipaLlQiLkoySjJIIzfyGFYiXiZeLl4ufj52SnpapmKKam5ucm5qdmgiloAWNjJSTnJmbmZ6dnqCfoJyhmaOXoZydoZqhmqSUpY+SjJCLkYugi6KFon+pe6Zxo2YIkYOTgJV+ln6icq5nrWewa7BtnX6YepV3lHaPeIt4i3iKeoh6iXqHfoiBCIV7BYqHiIaHhYeFgoF8fXx9eoF4g3iDcIdoi2iLZZJhmXOTcI9tjAh9iwV0i3mKfIgIcYcFhImCin+Jf4l1iGqHeop8in6LfYp/jICNCIiLBWuLcJd0oXOie6OEogj3GvchFYqCioGLgot2j3aTd5pupniygwj3FouL985RjIs2RYsFd4t5hHt9e32BfYZ9CJz43xWLt5WwoaqgqqWaqouqi6V8oGyhbJZmi1+LYIBldW12bHF8bItsi3Gadqp1qYGxi7YIr/0mFYqQipGLkIuVjZWQl5GdmZeekQjEi4v7FFeLBYCLgY6Dk4SShZKJkwj3T28Vi3+QgJWCloKVhJWICJqG9yqLi/dySouL+ztOiwWFjIaNh46Hj4mOiY0Iio+L9ylOiov7OgXB+UQVj6ybrKmspaejmaOLj4uQi4+KqYWkd6BqnHCUcYtxi4WKhYuFhWV6aXFrc3FwfWyKCIaLhoyGi2WRcZx+qYCghqWKqIuVjJWMlgj3Svu9FYvysL7Vi6KLoIacgZyBmH+UfJN8kn6Pfo9+jX+LggiLaAWLhouEioCKgIqDiYSJhIiDiIGIgoeDhYSFhYWEg4WEhYKHgIeAiH+KfosIhYsFcYt2j3qSeJN+mISbg5yHmomZiJiKm4ufCA6L+FQVi+ii4bnZuNrJydq42bnhouiL6IvhdNld2l7JTbg8uT2iNYsuiy50NV09XjxNTTxeCD1dNXQuiy6LNaI9uTy4Tcle2l3ZdOGL6AizixWLL6M3vD68P8tR22UI+3X4/gVwTn1Li0cI2PeXFamLBayLtY2+j5SMkYiOhY+FjISIhYiEhoeCighVhvdA/JPz98lB914Fe416jXuMg4yFj4iSiZGLko+Rj5GRjpOKCPcQhQWsi7WNvo+TjJGIj4WOhYyEiIWIhIaHg4oIVob3PvyQuvcyBaPbl76LoYu2frdxt4mNh5KEl4SXhpOJj4mPiJGHlYeUiJOKkomSipKLkouik56bnAianJ6ToYuMi4yLjIuNioyLi4sy3iG0+xCLOos/eEZlRWRTWGBJCPea/V0VtX+4hbmLwou/lL2dCIiR+yb4IgX3evwEFdK1xMS21LXUoNqL4IvdeNZl0I19jHuLeYtgf1NzRQgO9xT4/fkjFT+LSWFpTGrKSbU/i16LYn1qcgiL9zuLiwWKoXqcdYt1i3p6inUIi4uL+96LiwWN+wDjNPcBi9eLzbasyq1MzWDXi/cCi+Tki/cCi/cBMuT7AosI+/P70RVJi1bAi82LzMDBzYvNi8BVi0qLSVZWSYsI9/OLFUmLVsCLzYvMwMHNi82LwFWLSotJVlZJiwj4ZnoVJfcc8fccBZeciKR6mHmYc4d9egiLizT7CTP3CQV9nHOPen55fohyl3oIi4vx+xwl+x0Ff3qOc51+nH2jj5mcCIuL4/cJ4vsJBZl6o4edmZyYjqN/nAiLjAUOi/hdFYvRmc2mysH3E+Xl9xPByqfNmNGL0YvNfspv9xFW5jHC+xSmSplJi0eLSH1IcEtU+xUwMPsRVQhMcEl9RYtFi0mZTKb7E8Ix5lX3FHDJfc6L0AjbixWLK6g1xD/EQdVW5msIi90Fi7SZqaadfYx7jnmPaJFtlnOaTbFsz4vti76ct62ve7SNtp66CJ+LBZKLlIqVh6aDqHysdbWWtJGzi7OLtYW1gKado5mjlKGTmo+ViQiXigWeXIxgfGKtZ5xfi1iLP3lRZWR3dXB6aX9vgWyEaYineJlti2MIizkF46vUwMTXw9an4Yvqi8WAw3TBdb9tuWOyZbJdqVaiVKJUllKLU4tTgFN0WHVdbGNkCGVkbF10V3RVgFOLUQgO+3KLPhWL+D/Zioj76/iVi4v36tyLi/w9/TGLBfcS93QV+CWLizb8JYuL4AWMzhWT4vgnZII0BfwR92wVo9/4GfsCczcF+9D3zxW41vfu+2VdQQX7Qvg2FdK/93/73URYBaL4WhXhms78IzV9BQ76lBT6lBWLDAoAAAAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAABAAAAA7APA/8D/wAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEAMgAAAAuACAABAAOAAEAJAAmACsAMAA/AEUARwBMAE4AVABXAFkAYgBnAGkAcAB1AHgA6ADs//3//wAAAAAAIAAmACoAMAA/AEQARwBMAE4AUwBWAFkAYQBkAGkAbAByAHcA6ADs//3//wAB/+P/4v/f/9v/zf/J/8j/xP/D/7//vv+9/7b/tf+0/7L/sf+w/0H/PgADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAEAAF3KKQRfDzz1AAsEAAAAAADPXpdyAAAAAM9el3L/9P+lBcUDyAAAAAgAAgAAAAAAAAABAAADwP/AAAAF5//0/9MFxQABAAAAAAAAAAAAAAAAAAAAKwAAAAAAAAAAAAAAAAIAAAAEAAAYBAD/9AQAACAD5AAABAABAgQAAAAEvAAABAD/9QMQAAICeAAAA1gAAAKUAAAEKP/7BNr/9wTwAAAE6gAABJQAAATuAAAFhAAABGT//wQAACQEDP/0BaEAAANEAR8DwAAAA/sAAAXgABsF5wAhA1kAAARUAAAEngBxBAAAUgPQADoEnQAAA6gAAAQAAAAEgABDBAAAAAMiAAAAAFAAACsAAAAAAA4ArgABAAAAAAABAAwAAAABAAAAAAACAA4AQAABAAAAAAADAAwAIgABAAAAAAAEAAwATgABAAAAAAAFABYADAABAAAAAAAGAAYALgABAAAAAAAKACgAWgADAAEECQABAAwAAAADAAEECQACAA4AQAADAAEECQADAAwAIgADAAEECQAEAAwATgADAAEECQAFABYADAADAAEECQAGAAwANAADAAEECQAKACgAWgB6AG8AYwBpAGEAbABWAGUAcgBzAGkAbwBuACAAMQAuADAAegBvAGMAaQBhAGx6b2NpYWwAegBvAGMAaQBhAGwAUgBlAGcAdQBsAGEAcgB6AG8AYwBpAGEAbABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format(\'woff\'),url(https://d19p4zemcycm7a.cloudfront.net/w2/font/zocial-regular-webfont.ttf) format(\'truetype\'),url(https://d19p4zemcycm7a.cloudfront.net/w2/font/zocial-regular-webfont.svg#zocialregular) format(\'svg\');font-weight:400;font-style:normal}#a0-widget .a0-zocial.a0-auth0:before{content:"?"}#a0-widget .a0-zocial.a0-auth0{background-color:#ff4500;width:auto}#a0-widget .a0-zocial.a0-block:before{position:absolute;left:0;top:0}#a0-widget .a0-zocial.a0-block .a0-mail{height:36px;display:block;margin-top:0;text-align:center;cursor:pointer;font-family:\'Lucida Grande\',Tahoma,sans-serif;font-size:16px;font-style:normal;font-variant:normal;font-weight:700;overflow:hidden;padding:7px;text-anchor:start;text-decoration:none solid #fff;text-indent:0;text-overflow:ellipsis;text-rendering:auto;text-shadow:rgba(0,0,0,.498039) 0 1px 0;text-transform:none;word-break:normal;word-spacing:0;word-wrap:normal;-webkit-font-smoothing:antialiased}#a0-widget .a0-zocial.a0-block{height:33px;display:block;margin:10px 0;text-overflow:ellipsis;overflow:hidden;padding-left:52px}#a0-widget .a0-zocial.a0-primary,#a0-widget .a0-zocial.a0-secondary{width:100%;margin:0;padding:0;font-size:14px;line-height:42px}#a0-widget .a0-zocial.a0-primary:before,#a0-widget .a0-zocial.a0-secondary:before{display:none}#a0-widget .a0-zocial.a0-primary{background-color:#747e85}#a0-widget .a0-zocial.a0-secondary{background-color:#f0f0eb;color:#222;text-shadow:0 1px 0 rgba(255,255,255,.8)}#a0-widget .a0-zocial{-webkit-font-smoothing:antialiased}#a0-widget label{font-family:sans-serif}#a0-widget .a0-zocial{font-size:16px}#a0-widget .a0-next{text-shadow:none;font-weight:700;font-family:\'Lucida Grande\',Tahoma,sans-serif}#a0-widget .a0-popup .a0-centrix{padding:0;vertical-align:middle;display:table-cell;margin:0}#a0-widget .a0-popup .a0-overlay.a0-ie8-overlay{background:0 0;background-image:url(https://s3.amazonaws.com/assets.auth0.com/w2/img/bg-transp.png)}#a0-widget .a0-popup .a0-overlay{margin:0;display:table;position:fixed;left:0;top:0;bottom:0;right:0;width:100%;height:100%;overflow:hidden;z-index:9999;font-weight:200;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#000;background:rgba(0,0,0,.8);background:-webkit-radial-gradient(50% 50%,ellipse closest-corner,rgba(0,0,0,.45) 1%,rgba(0,0,0,.8) 100%);background:-moz-radial-gradient(50% 50%,ellipse closest-corner,rgba(0,0,0,.45) 1%,rgba(0,0,0,.8) 100%);background:radial-gradient(50% 50%,ellipse closest-corner,rgba(0,0,0,.45) 1%,rgba(0,0,0,.8) 100%);opacity:0;-webkit-transition:300ms opacity ease-out;-moz-transition:300ms opacity ease-out;transition:300ms opacity ease-out;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}#a0-widget .a0-popup .a0-overlay.a0-active{opacity:1}#a0-widget .a0-popup .a0-overlay .a0-panel{display:none;margin:0 auto}#a0-widget .a0-popup .a0-overlay .a0-panel.a0-active{display:block;-webkit-animation-duration:400ms;-webkit-animation-timing-function:ease;-webkit-animation-name:showPanel}#a0-widget .a0-popup .a0-overlay .a0-panel{-webkit-animation-duration:400ms;-webkit-animation-timing-function:ease;-webkit-animation-name:hidePanel;width:280px}#a0-widget .a0-email,#a0-widget .a0-password,#a0-widget .a0-repeatPassword{margin-bottom:14px}#a0-widget .a0-email-readonly{text-align:center;display:inherit;color:#41444a;font-weight:700;margin-bottom:25px}#a0-widget .a0-panel .a0-reset .a0-header,#a0-widget .a0-panel .a0-signup .a0-header{margin-bottom:15px;font-size:14px;color:#41444a}#a0-widget .a0-panel .a0-signup .a0-signup-footer{margin-bottom:15px;font-size:12px;color:#41444a;text-align:left;margin-top:10px}#a0-widget .a0-panel a{color:#4183c4}#a0-widget .a0-panel a:hover{text-decoration:underline}#a0-widget .a0-panel .a0-loading{height:70px}#a0-widget .a0-panel .a0-loading.a0-with-message{height:170px}@-moz-keyframes showPanel{0%{opacity:0;-webkit-transform:scale(0.95) translate3d(0,0,0)}100%{opacity:1;-webkit-transform:scale(1) translate3d(0,0,0)}}@-webkit-keyframes showPanel{0%{opacity:0;-webkit-transform:scale(0.95) translate3d(0,0,0)}100%{opacity:1;-webkit-transform:scale(1) translate3d(0,0,0)}}@-ms-keyframes showPanel{0%{opacity:0;-webkit-transform:scale(0.95) translate3d(0,0,0)}100%{opacity:1;-webkit-transform:scale(1) translate3d(0,0,0)}}@keyframes showPanel{0%{opacity:0;-webkit-transform:scale(0.95) translate3d(0,0,0)}100%{opacity:1;-webkit-transform:scale(1) translate3d(0,0,0)}}@-moz-keyframes hidePanel{0%{-webkit-transform:scale(1) translate3d(0,0,0)}100%{-webkit-transform:scale(0.98) translate3d(0,0,0)}}@-webkit-keyframes hidePanel{0%{-webkit-transform:scale(1) translate3d(0,0,0)}100%{-webkit-transform:scale(0.98) translate3d(0,0,0)}}@-ms-keyframes hidePanel{0%{-webkit-transform:scale(1) translate3d(0,0,0)}100%{-webkit-transform:scale(0.98) translate3d(0,0,0)}}@keyframes hidePanel{0%{-webkit-transform:scale(1) translate3d(0,0,0)}100%{-webkit-transform:scale(0.98) translate3d(0,0,0)}}#a0-widget .a0-popup .a0-panel{background:#fafafa;background-image:-webkit-linear-gradient(#fff,#fafafa);background-image:-moz-linear-gradient(#fff,#fafafa);background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fafafa));background-image:linear-gradient(#fff,#fafafa);z-index:10;-webkit-box-shadow:0 0 1px 1px rgba(0,0,0,.2),0 10px 27px rgba(0,0,0,.7);box-shadow:0 0 1px 1px rgba(0,0,0,.2),0 10px 27px rgba(0,0,0,.7);border-radius:6px;-webkit-touch-callout:none}#a0-widget .a0-popup .a0-panel:after{content:"";position:absolute;left:0;right:0;top:0;bottom:0;z-index:1;-webkit-box-shadow:inset 0 -1px 2px rgba(82,93,112,.4);box-shadow:inset 0 -1px 2px rgba(82,93,112,.4)}#a0-widget .a0-popup .a0-panel .a0-top-header{display:block;position:relative;min-height:65px;overflow:hidden;border-radius:6px 6px 0 0;background:#f1f4f6;background-image:-webkit-linear-gradient(#f1f4f6,#e9edf0);background-image:-moz-linear-gradient(#f1f4f6,#e9edf0);background-image:-webkit-gradient(linear,left top,left bottom,from(#f1f4f6),to(#e9edf0));background-image:linear-gradient(#f1f4f6,#e9edf0);border-bottom:1px solid rgba(40,69,85,.11)}#a0-widget .a0-popup .a0-panel .a0-top-header:before{content:\'\';position:absolute;height:5px;bottom:-1px;left:0;right:0;background-image:-webkit-linear-gradient(rgba(40,69,85,0),rgba(40,69,85,.1));background-image:-moz-linear-gradient(rgba(40,69,85,0),rgba(40,69,85,.1));background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(40,69,85,0)),to(rgba(40,69,85,.1)));background-image:linear-gradient(rgba(40,69,85,0),rgba(40,69,85,.1))}#a0-widget .a0-popup .a0-panel .a0-top-header:after{content:\'\';position:absolute;height:4px;bottom:0;left:0;right:0;background-image:-webkit-linear-gradient(left,#e9edf0,rgba(241,244,246,0),#e9edf0);background-image:-moz-linear-gradient(left,#e9edf0,rgba(241,244,246,0),#e9edf0);background-image:-webkit-gradient(linear,left top,right top,from(#e9edf0),color-stop(rgba(241,244,246,0)),to(#e9edf0));background-image:linear-gradient(left,#e9edf0,rgba(241,244,246,0),#e9edf0)}#a0-widget .a0-popup .a0-panel .a0-header h1{padding:21px 20px;margin:0;font-size:18px;color:#41444a;font-weight:700;border-bottom:1px solid #DDE3E6;text-align:left}#a0-widget .a0-popup .a0-panel .a0-header a{display:block;overflow:hidden;text-indent:200%;position:absolute;width:12px;opacity:.4;padding:5px;z-index:5}#a0-widget .a0-popup .a0-panel .a0-header a:hover{opacity:.66}#a0-widget .a0-popup .a0-panel .a0-header a:active{opacity:1}#a0-widget .a0-popup .a0-panel .a0-header a.a0-close{height:12px;background-repeat:no-repeat;background-position:50% 50%;-webkit-background-size:12px 12px;background-size:12px 12px;right:19px;top:21px;cursor:pointer}#a0-widget .a0-popup .a0-panel .a0-header a.a0-close:hover{opacity:.66}#a0-widget .a0-popup .a0-panel .a0-header img{height:32px;margin:16px 10px 10px 20px;position:relative;float:left}#a0-widget .a0-action .a0-spinner{width:100%;background-color:#6A777F;background-repeat:no-repeat;background-position:center;margin:0;height:44px;border:1px solid #777;border-color:rgba(0,0,0,.2);border-bottom-color:#333;border-bottom-color:rgba(0,0,0,.4);-webkit-box-shadow:inset 0 .08em 0 rgba(255,255,255,.4),inset 0 0 .1em rgba(255,255,255,.9);box-shadow:inset 0 .08em 0 rgba(255,255,255,.4),inset 0 0 .1em rgba(255,255,255,.9);-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;border-radius:.3em}#a0-widget .a0-popup .a0-panel .a0-footer{display:block;position:relative;border-radius:0 0 5px 5px;height:25px;line-height:25px;vertical-align:middle;margin:0 15px;border-top:1px solid #DDE3E6;z-index:5}#a0-widget .a0-popup .a0-panel .a0-footer.a0-hide{height:1px;border-top:0}#a0-widget .a0-popup .a0-panel .a0-footer.a0-hide span{display:none}#a0-widget .a0-popup .a0-panel .a0-footer span{font-size:10px;color:#666}#a0-widget .a0-popup .a0-panel .a0-footer a{font-size:9px;color:#333;font-weight:700;text-decoration:none;cursor:pointer}#a0-widget .a0-panel .a0-footer.a0-hide{height:1px;border-top:0}#a0-widget .a0-panel .a0-footer.a0-hide span{display:none}#a0-widget .a0-iconlist,#a0-widget .a0-list{margin:25px 0;position:relative;z-index:5}#a0-widget .a0-iconlist:after,#a0-widget .a0-iconlist:before,#a0-widget .a0-list:after,#a0-widget .a0-list:before{display:table;content:""}#a0-widget .a0-iconlist:after,#a0-widget .a0-list:after{clear:both}#a0-widget .a0-list span{display:block;margin:10px 0;cursor:pointer}#a0-widget .a0-iconlist{text-align:center}#a0-widget .a0-iconlist span{margin:0 2px}#a0-widget .a0-forgot-pass{font-size:12px;color:#666;font-weight:400}#a0-widget .a0-create-account{margin-top:20px;text-align:center}#a0-widget .a0-create-account a{font-size:12px;color:#6d6d6d;text-decoration:none}#a0-widget .a0-create-account a:hover{text-decoration:underline}#a0-widget .a0-loggedin span.a0-centered.a0-all{color:#008CDD;cursor:pointer}#a0-widget .a0-loggedin span.a0-centered{text-align:center;padding:5px 0;margin:15px 0 5px;font-size:13px;display:block}#a0-widget .a0-loggedin span.a0-centered.a0-all:hover{text-decoration:underline}#a0-widget .a0-reset .a0-options a.a0-cancel,#a0-widget .a0-signup .a0-options a.a0-cancel{color:#008CDD;cursor:pointer;text-decoration:none}#a0-widget .a0-reset .a0-options a.a0-cancel:hover,#a0-widget .a0-signup .a0-options a.a0-cancel:hover{text-decoration:underline}#a0-widget .a0-reset .a0-options,#a0-widget .a0-signup .a0-options{text-align:center;padding:5px 0;margin:15px 0 5px;font-size:13px;display:block}#a0-widget form{margin:30px!important;margin-bottom:22px;position:relative;z-index:5}#a0-widget form span{font-size:16px}#a0-widget form label a{color:#7F8899;font-weight:700;text-shadow:0 1px 0 #fff}#a0-widget form label{display:block;color:#7F8899;font-size:13px;font-weight:700;margin:0 0 7px;text-shadow:0 1px 0 #fff;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}#a0-widget form input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;font-size:18px;padding:10px 12px;border:1px solid #B4BECD;border-top-color:#B0BACA;border-bottom-color:#D3D9E2;-webkit-box-shadow:inset 0 1px 2px rgba(130,137,150,.23),0 1px 0 rgba(255,255,255,.85);box-shadow:inset 0 1px 2px rgba(130,137,150,.23),0 1px 0 rgba(255,255,255,.85);border-radius:4px;margin:0;font-family:\'Helvetica Neue\',Helvetica,Arial Geneva,sans-serif}#a0-widget .a0-placeholder{color:#ccc}#a0-widget form input:focus{border-color:#5695DB #70A7E4 #89B8EC;outline:0;-webkit-box-shadow:inset 0 1px 2px rgba(70,123,181,.35),0 0 4px #5695db;box-shadow:inset 0 1px 2px rgba(70,123,181,.35),0 0 4px #5695db}#a0-widget form .a0-invalid input{outline:0;border-color:#FF7076;border-top-color:#FF5C61;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.2),0 0 4px 0 rgba(255,0,0,.5);box-shadow:inset 0 1px 2px rgba(0,0,0,.2),0 0 4px 0 rgba(255,0,0,.5)}#a0-widget .a0-header .a0-error{padding:9px 0;margin:10px auto;width:70%;font-size:14px;line-height:13px;color:#b95353;text-align:center}#a0-widget .a0-header .a0-success{padding:9px 0;margin:10px auto;width:70%;font-size:14px;line-height:13px;color:#0fad29;text-align:center}#a0-widget form .a0-note{display:block;color:#7F8899;font-size:13px;font-weight:700;margin:0 0 7px;text-shadow:0 1px 0 #fff;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}#a0-widget form .a0-note a{color:#008CDD;text-decoration:none}#a0-widget form .a0-invalid .a0-error{visibility:visible}#a0-widget form button{display:block;margin:20px 0 0;cursor:pointer;width:100%}#a0-widget .a0-action{text-align:right;margin:0 30px 30px;position:relative;z-index:5}#a0-widget form .a0-action{margin:0}#a0-widget .a0-action button{width:auto}#a0-widget .a0-separator{position:relative;text-align:center;margin:0 0 25px}#a0-widget .a0-separator:before{content:"";display:block;border-top:1px solid #7F8899;width:200px;left:50%;margin-left:-100px;height:1px;position:absolute;top:50%;z-index:1}#a0-widget .a0-separator span{background:#fafafa;padding:0 10px;position:relative;z-index:5;color:#7F8899;font-size:13px;font-weight:700;text-shadow:0 1px 0 #fff}#a0-widget span.a0-back{display:block;color:#008CDD;text-align:center;padding:5px 0;margin:15px 0 5px;font-size:13px;cursor:pointer;position:relative;z-index:5;outline:0}#a0-widget span.a0-back:hover{text-decoration:underline}#a0-widget .a0-signin .a0-panel.a0-strategies .a0-list .a0-email{display:block;color:#7F8899;font-size:13px;font-weight:700;margin:0 0 7px;text-shadow:0 1px 0 #fff;text-align:center}#a0-widget .a0-popup .a0-overlay .a0-onestep{width:345px}@media (max-width:280px){#a0-widget .a0-create-account a,#a0-widget .a0-reset .a0-options,#a0-widget .a0-signup .a0-options a.a0-cancel{font-size:16px}#a0-widget .a0-popup .a0-panel .a0-header a.a0-close{visibility:hidden}#a0-widget .a0-popup #a0-onestep{-webkit-transition:none;-moz-transition:none;transition:none;height:100%}#a0-widget .a0-popup .a0-centrix{position:absolute;width:100%;height:100%;display:block}#a0-widget .a0-popup .a0-overlay .a0-panel{width:240px;margin:0 0 0 -120px}#a0-widget .a0-signin .a0-popup .a0-panel.a0-strategies .a0-list,#a0-widget form{margin:12px}#a0-widget form input{padding:5px}#a0-widget .a0-popup .a0-panel .a0-header{margin:0;padding:0}#a0-widget .a0-popup .a0-panel .a0-header h1{padding:14px 16px;margin:0;font-size:22px}#a0-widget .a0-popup .a0-panel .a0-header a.a0-close{right:14px;top:16px}}@media (min-width:281px) and (max-width:340px){#a0-widget .a0-loading .a0-spin-container{top:37%}#a0-widget .a0-loading .a0-spin-img{top:40%}#a0-widget .a0-create-account a,#a0-widget .a0-reset .a0-options,#a0-widget .a0-signup .a0-options a.a0-cancel{font-size:16px}#a0-widget .a0-popup .a0-panel .a0-header a.a0-close{top:16px}#a0-widget .a0-popup #a0-onestep{-webkit-transition:none;-moz-transition:none;transition:none;height:100%}#a0-widget .a0-popup .a0-centrix{position:absolute;width:100%;height:100%;display:block}#a0-widget .a0-popup .a0-overlay .a0-panel{margin:0;left:0;height:100%;width:100%;border-radius:0}#a0-widget .a0-popup .a0-zocial,#a0-widget .a0-popup a.a0-zocial{font-size:18px}#a0-widget .a0-signin .a0-popup .a0-panel.a0-strategies .a0-list{margin:15px}#a0-widget form{margin:15px 25px}#a0-widget form input{padding:6px;font-size:18px}#a0-widget .a0-popup .a0-panel .a0-header{margin:0;padding:0;min-height:32px}#a0-widget .a0-popup .a0-panel .a0-header h1{padding:12px 16px;margin-top:1px;font-size:20px}#a0-widget .a0-popup .a0-panel .a0-header img{height:32px;margin:9px 10px 6px 18px}#a0-widget .a0-zocial.a0-primary{line-height:34px}#a0-widget .a0-action .a0-spinner{height:34px}#a0-widget .a0-create-account{margin-top:20px}#a0-widget .a0-popup .a0-email,#a0-widget .a0-popup .a0-password,#a0-widget .a0-popup .a0-repeatPassword{margin-bottom:5px}}@-moz-keyframes orbit{0%{opacity:1;z-index:99;-moz-transform:rotate(180deg);-moz-animation-timing-function:ease-out}7%{opacity:1;-moz-transform:rotate(300deg);-moz-animation-timing-function:linear;-moz-origin:0}30%{opacity:1;-moz-transform:rotate(410deg);-moz-animation-timing-function:ease-in-out;-moz-origin:7%}39%{opacity:1;-moz-transform:rotate(645deg);-moz-animation-timing-function:linear;-moz-origin:30%}70%{opacity:1;-moz-transform:rotate(770deg);-moz-animation-timing-function:ease-out;-moz-origin:39%}75%{opacity:1;-moz-transform:rotate(900deg);-moz-animation-timing-function:ease-out;-moz-origin:70%}100%,76%{opacity:0;-moz-transform:rotate(900deg)}}@-webkit-keyframes orbit{0%{opacity:1;z-index:99;-webkit-transform:rotate(180deg);-webkit-animation-timing-function:ease-out}7%{opacity:1;-webkit-transform:rotate(300deg);-webkit-animation-timing-function:linear;-webkit-origin:0}30%{opacity:1;-webkit-transform:rotate(410deg);-webkit-animation-timing-function:ease-in-out;-webkit-origin:7%}39%{opacity:1;-webkit-transform:rotate(645deg);-webkit-animation-timing-function:linear;-webkit-origin:30%}70%{opacity:1;-webkit-transform:rotate(770deg);-webkit-animation-timing-function:ease-out;-webkit-origin:39%}75%{opacity:1;-webkit-transform:rotate(900deg);-webkit-animation-timing-function:ease-out;-webkit-origin:70%}100%,76%{opacity:0;-webkit-transform:rotate(900deg)}}@-ms-keyframes orbit{0%{opacity:1;z-index:99;-ms-transform:rotate(180deg);-ms-animation-timing-function:ease-out}7%{opacity:1;-ms-transform:rotate(300deg);-ms-animation-timing-function:linear;-ms-origin:0}30%{opacity:1;-ms-transform:rotate(410deg);-ms-animation-timing-function:ease-in-out;-ms-origin:7%}39%{opacity:1;-ms-transform:rotate(645deg);-ms-animation-timing-function:linear;-ms-origin:30%}70%{opacity:1;-ms-transform:rotate(770deg);-ms-animation-timing-function:ease-out;-ms-origin:39%}75%{opacity:1;-ms-transform:rotate(900deg);-ms-animation-timing-function:ease-out;-ms-origin:70%}100%,76%{opacity:0;-ms-transform:rotate(900deg)}}@keyframes orbit{0%{opacity:1;z-index:99;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-timing-function:ease-out;-moz-animation-timing-function:ease-out;animation-timing-function:ease-out}7%{opacity:1;-webkit-transform:rotate(300deg);-moz-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg);-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;animation-timing-function:linear;origin:0}30%{opacity:1;-webkit-transform:rotate(410deg);-moz-transform:rotate(410deg);-ms-transform:rotate(410deg);transform:rotate(410deg);-webkit-animation-timing-function:ease-in-out;-moz-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;origin:7%}39%{opacity:1;-webkit-transform:rotate(645deg);-moz-transform:rotate(645deg);-ms-transform:rotate(645deg);transform:rotate(645deg);-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;animation-timing-function:linear;origin:30%}70%{opacity:1;-webkit-transform:rotate(770deg);-moz-transform:rotate(770deg);-ms-transform:rotate(770deg);transform:rotate(770deg);-webkit-animation-timing-function:ease-out;-moz-animation-timing-function:ease-out;animation-timing-function:ease-out;origin:39%}75%{opacity:1;-webkit-transform:rotate(900deg);-moz-transform:rotate(900deg);-ms-transform:rotate(900deg);transform:rotate(900deg);-webkit-animation-timing-function:ease-out;-moz-animation-timing-function:ease-out;animation-timing-function:ease-out;origin:70%}100%,76%{opacity:0;-webkit-transform:rotate(900deg);-moz-transform:rotate(900deg);-ms-transform:rotate(900deg);transform:rotate(900deg)}}#a0-widget input[disabled]{background-color:#d9dee0}#a0-widget #a0-onestep{overflow:hidden;height:auto;-webkit-transition:height 100ms ease-in;-moz-transition:height 100ms ease-in;transition:height 100ms ease-in}#a0-widget #a0-onestep.a0-disable-transition{-webkit-transition:none;-moz-transition:none;transition:none}#a0-widget #a0-onestep .a0-loading{min-height:110px}#a0-widget .a0-spin-container{position:relative;top:50%}#a0-widget .a0-loading.a0-with-message .a0-spin-container{top:37%}#a0-widget .a0-spin-message{text-align:center;position:relative;top:60px}#a0-widget .a0-spin-message span{font-size:14px;color:#41444a}#a0-widget .a0-spin-img{position:relative;top:50%;left:50%;width:32px;height:32px;margin-left:-16px;margin-top:-16px}#a0-widget .a0-popup .a0-panel .a0-instructions{margin-bottom:12px}#a0-widget input::-webkit-input-placeholder{color:#9da4ad}#a0-widget input:-moz-placeholder{color:#9da4ad}#a0-widget input::-moz-placeholder{color:#9da4ad}#a0-widget input:-ms-input-placeholder{color:#9da4ad}';
            insert(style)
        }, {
            fs: 38
        }
    ],
    17: [
        function(require, module, exports) {
            var json_parse = require("./json_parse");

            function LoginError(status, details) {
                var obj;
                if (typeof details == "string") {
                    try {
                        obj = json_parse(details)
                    } catch (er) {
                        obj = {
                            message: details
                        }
                    }
                } else {
                    obj = details || {
                        description: "server error"
                    }
                } if (obj && !obj.code) {
                    obj.code = obj.error
                }
                var err = Error.call(this, obj.description || obj.message || obj.error);
                err.status = status;
                err.name = obj.code;
                err.code = obj.code;
                err.details = obj;
                if (status === 0) {
                    err.code = "Unknown";
                    err.message = "Unknown error."
                }
                return err
            }
            if (Object && Object.create) {
                LoginError.prototype = Object.create(Error.prototype, {
                    constructor: {
                        value: LoginError
                    }
                })
            }
            module.exports = LoginError
        }, {
            "./json_parse": 21
        }
    ],
    18: [
        function(require, module, exports) {
            module.exports = function(obj, prop) {
                if (!obj[prop]) {
                    throw new Error(prop + " is required.")
                }
            }
        }, {}
    ],
    19: [
        function(require, module, exports) {
            var Base64 = require("Base64");
            module.exports = function(str) {
                var output = str.replace("-", "+").replace("_", "/");
                switch (output.length % 4) {
                    case 0:
                        break;
                    case 2:
                        output += "==";
                        break;
                    case 3:
                        output += "=";
                        break;
                    default:
                        throw "Illegal base64url string!"
                }
                return decodeURIComponent(escape(Base64.atob(output)))
            }
        }, {
            Base64: 23
        }
    ],
    20: [
        function(require, module, exports) {
            var global = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
            var assert_required = require("./assert_required");
            var base64_url_decode = require("./base64_url_decode");
            var qs = require("qs");
            var xtend = require("xtend");
            var reqwest = require("reqwest");
            var jsonp = require("jsonp");
            var use_jsonp = require("./use_jsonp");
            var LoginError = require("./LoginError");
            var json_parse = require("./json_parse");

            function Auth0(options) {
                if (!(this instanceof Auth0)) {
                    return new Auth0(options)
                }
                assert_required(options, "clientID");
                assert_required(options, "callbackURL");
                assert_required(options, "domain");
                this._clientID = options.clientID;
                this._callbackURL = options.callbackURL;
                this._domain = options.domain;
                this._callbackOnLocationHash = false || options.callbackOnLocationHash
            }
            Auth0.prototype._redirect = function(url) {
                global.window.location = url
            };
            Auth0.prototype._renderAndSubmitWSFedForm = function(options, formHtml) {
                var div = document.createElement("div");
                div.innerHTML = formHtml;
                var form = document.body.appendChild(div).children[0];
                if (options.popup && !this._callbackOnLocationHash) {
                    form.target = "auth0_signup_popup"
                }
                form.submit()
            };
            Auth0.prototype._getMode = function() {
                return {
                    scope: "openid",
                    response_type: this._callbackOnLocationHash ? "token" : "code"
                }
            };
            Auth0.prototype._getUserInfo = function(profile, id_token, callback) {
                if (profile && !profile.user_id) {
                    var self = this;
                    var url = "https://" + self._domain + "/tokeninfo?";
                    var fail = function(status, description) {
                        callback({
                            error: status,
                            error_description: description
                        })
                    };
                    if (use_jsonp()) {
                        return jsonp(url + qs.stringify({
                            id_token: id_token
                        }), {
                            param: "cbx",
                            timeout: 15e3
                        }, function(err, resp) {
                            if (err) {
                                return fail(0, err.toString())
                            }
                            return resp.status === 200 ? callback(null, resp.user) : fail(resp.status, resp.error)
                        })
                    }
                    return reqwest({
                        url: url,
                        method: "post",
                        type: "json",
                        crossOrigin: true,
                        data: {
                            id_token: id_token
                        }
                    }).fail(function(err) {
                        fail(err.status, err.responseText)
                    }).then(function(userinfo) {
                        callback(null, userinfo)
                    })
                }
                callback(null, profile)
            };
            Auth0.prototype.getProfile = function(id_token, callback) {
                if (!id_token || typeof id_token !== "string") {
                    return callback(new Error("Invalid token"))
                }
                this._getUserInfo(this.decodeJwt(id_token), id_token, callback)
            };
            Auth0.prototype.validateUser = function(options, callback) {
                var endpoint = "https://" + this._domain + "/public/api/users/validate_userpassword";
                var query = xtend(options, {
                    client_id: this._clientID,
                    username: options.username || options.email
                });
                if (use_jsonp()) {
                    return jsonp(endpoint + "?" + qs.stringify(query), {
                        param: "cbx",
                        timeout: 15e3
                    }, function(err, resp) {
                        if (err) {
                            return callback(err)
                        }
                        if ("error" in resp && resp.status !== 404) {
                            return callback(new Error(resp.error))
                        }
                        callback(null, resp.status === 200)
                    })
                }
                reqwest({
                    url: endpoint,
                    method: "post",
                    type: "text",
                    data: query,
                    crossOrigin: true,
                    error: function(err) {
                        if (err.status !== 404) {
                            return callback(new Error(err.responseText))
                        }
                        callback(null, false)
                    },
                    success: function(resp) {
                        callback(null, resp.status === 200)
                    }
                })
            };
            Auth0.prototype.decodeJwt = function(jwt) {
                var encoded = jwt && jwt.split(".")[1];
                return json_parse(base64_url_decode(encoded))
            };
            Auth0.prototype.parseHash = function(hash) {
                if (hash.match(/error/)) {
                    hash = hash.substr(1).replace(/^\//, "");
                    var parsed_qs = qs.parse(hash);
                    var err = {
                        error: parsed_qs.error,
                        error_description: parsed_qs.error_description
                    };
                    return err
                }
                if (!hash.match(/access_token/)) {
                    return null
                }
                hash = hash.substr(1).replace(/^\//, "");
                var parsed_qs = qs.parse(hash);
                var id_token = parsed_qs.id_token;
                var prof = this.decodeJwt(id_token);
                var invalidJwt = function(error) {
                    var err = {
                        error: "invalid_token",
                        error_description: error
                    };
                    return err
                };
                if (prof.aud !== this._clientID) {
                    return invalidJwt("The clientID configured (" + this._clientID + ") does not match with the clientID set in the token (" + prof.aud + ").")
                }
                if (prof.iss !== "https://" + this._domain + "/") {
                    return invalidJwt("The domain configured (https://" + this._domain + "/) does not match with the domain set in the token (" + prof.iss + ").")
                }
                return {
                    profile: prof,
                    id_token: id_token,
                    access_token: parsed_qs.access_token,
                    state: parsed_qs.state
                }
            };
            Auth0.prototype.signup = function(options, callback) {
                var self = this;
                var query = xtend(this._getMode(), options, {
                    client_id: this._clientID,
                    redirect_uri: this._callbackURL,
                    email: options.username || options.email,
                    tenant: this._domain.split(".")[0]
                });

                function success() {
                    if ("auto_login" in options && !options.auto_login) {
                        if (callback) callback();
                        return
                    }
                    self.login(options, callback)
                }

                function fail(status, resp) {
                    var error = new LoginError(status, resp);
                    if (callback) return callback(error);
                    throw error
                }
                if (use_jsonp()) {
                    return jsonp("https://" + this._domain + "/dbconnections/signup?" + qs.stringify(query), {
                        param: "cbx",
                        timeout: 15e3
                    }, function(err, resp) {
                        if (err) {
                            return fail(0, err)
                        }
                        return resp.status == 200 ? success() : fail(resp.status, resp.err)
                    })
                }
                reqwest({
                    url: "https://" + this._domain + "/dbconnections/signup",
                    method: "post",
                    type: "html",
                    data: query,
                    success: success,
                    crossOrigin: true
                }).fail(function(err) {
                    fail(err.status, err.responseText)
                })
            };
            Auth0.prototype.changePassword = function(options, callback) {
                var self = this;
                var query = {
                    tenant: this._domain.split(".")[0],
                    client_id: this._clientID,
                    connection: options.connection,
                    email: options.username || options.email,
                    password: options.password
                };

                function fail(status, resp) {
                    var error = new LoginError(status, resp);
                    if (callback) return callback(error)
                }
                if (use_jsonp()) {
                    return jsonp("https://" + this._domain + "/dbconnections/change_password?" + qs.stringify(query), {
                        param: "cbx",
                        timeout: 15e3
                    }, function(err, resp) {
                        if (err) {
                            return fail(0, err)
                        }
                        return resp.status == 200 ? callback(null, resp.message) : fail(resp.status, resp.err)
                    })
                }
                reqwest({
                    url: "https://" + this._domain + "/dbconnections/change_password",
                    method: "post",
                    type: "html",
                    data: query,
                    crossOrigin: true
                }).fail(function(err) {
                    fail(err.status, err.responseText)
                }).then(function(r) {
                    callback(null, r)
                })
            };
            Auth0.prototype.login = Auth0.prototype.signin = function(options, callback) {
                if (typeof options.username !== "undefined" || typeof options.email !== "undefined") {
                    return this.loginWithUsernamePassword(options, callback)
                }
                if ( !! options.popup) {
                    return this.loginWithPopup(options, callback)
                }
                var query = xtend(this._getMode(), options, {
                    client_id: this._clientID,
                    redirect_uri: this._callbackURL
                });
                this._redirect("https://" + this._domain + "/authorize?" + qs.stringify(query))
            };
            Auth0.prototype.loginWithPopup = function(options, callback) {
                var self = this;
                var query = xtend(this._getMode(), options, {
                    client_id: this._clientID,
                    redirect_uri: this._callbackURL
                });
                var popupUrl = "https://" + this._domain + "/authorize?" + qs.stringify(query);
                var popupOptions = xtend({
                    width: 500,
                    height: 600
                }, options.popupOptions);
                if (!callback) {
                    throw new Error("popup mode should receive a mandatory callback")
                }
                var popup = window.open(popupUrl, null, stringifyPopupSettings(popupOptions));
                if (!popup) {
                    return callback(new Error("Unable to open popup"))
                }
                var popupReadyTimer = setInterval(popupReadyCheck, 50);
                popup.focus();

                function popupReadyCheck() {
                    if (!popup) {
                        return clearInterval(popupReadyTimer)
                    }
                    if (!(popup.top || popup.window)) {
                        clearInterval(popupReadyTimer);
                        popup = null;
                        return
                    }
                    var hash = "";
                    try {
                        if (/#access_token/.test(popup.location.href)) {
                            clearInterval(popupReadyTimer);
                            hash = popup.location.hash;
                            popup.close();
                            pupup = null
                        }
                        if (/\?error/.test(popup.location.href)) {
                            clearInterval(popupReadyTimer);
                            hash = "#" + popup.location.search.slice(1);
                            popup.close();
                            popup = null
                        }
                    } catch (err) {}
                    if (hash.length) {
                        var result = self.parseHash(hash);
                        if (result && result.id_token) {
                            return self.getProfile(result.id_token, function(err, profile) {
                                callback(err, profile, result.id_token, result.access_token, result.state)
                            })
                        }
                    }
                }
            };

            function stringifyPopupSettings(popupOptions) {
                var settings = "";
                for (var key in popupOptions) {
                    settings += key + "=" + popupOptions[key] + ","
                }
                return settings.slice(0, -1)
            }
            Auth0.prototype.loginWithResourceOwner = function(options, callback) {
                var self = this;
                var query = xtend(this._getMode(), options, {
                    client_id: this._clientID,
                    username: options.username || options.email,
                    grant_type: "password"
                });
                var endpoint = "/oauth/ro";

                function enrichGetProfile(resp, callback) {
                    self.getProfile(resp.id_token, function(err, profile) {
                        callback(err, profile, resp.id_token, resp.access_token, resp.state)
                    })
                }
                if (use_jsonp()) {
                    return jsonp("https://" + this._domain + endpoint + "?" + qs.stringify(query), {
                        param: "cbx",
                        timeout: 15e3
                    }, function(err, resp) {
                        if (err) {
                            return callback(err)
                        }
                        if ("error" in resp) {
                            var error = new LoginError(resp.status, resp.error);
                            return callback(error)
                        }
                        enrichGetProfile(resp, callback)
                    })
                }
                reqwest({
                    url: "https://" + this._domain + endpoint,
                    method: "post",
                    type: "json",
                    data: query,
                    crossOrigin: true,
                    success: function(resp) {
                        enrichGetProfile(resp, callback)
                    }
                }).fail(function(err) {
                    var er = err;
                    if (!er.status || er.status === 0) {
                        er = {};
                        er.status = 401;
                        er.responseText = {
                            code: "invalid_user_password"
                        }
                    } else {
                        er.responseText = err
                    }
                    var error = new LoginError(er.status, er.responseText);
                    callback(error)
                })
            };
            Auth0.prototype.loginWithUsernamePassword = function(options, callback) {
                if (callback && callback.length > 1) {
                    return this.loginWithResourceOwner(options, callback)
                }
                var self = this;
                var popup;
                if (options.popup && !this._callbackOnLocationHash) {
                    var popupOptions = stringifyPopupSettings(xtend({
                        width: 500,
                        height: 600
                    }, options.popupOptions || {}));
                    popup = window.open("about:blank", "auth0_signup_popup", popupOptions)
                }
                var query = xtend(this._getMode(), options, {
                    client_id: this._clientID,
                    redirect_uri: this._callbackURL,
                    username: options.username || options.email,
                    tenant: this._domain.split(".")[0]
                });
                var endpoint = "/usernamepassword/login";
                if (use_jsonp()) {
                    return jsonp("https://" + this._domain + endpoint + "?" + qs.stringify(query), {
                        param: "cbx",
                        timeout: 15e3
                    }, function(err, resp) {
                        if (err) {
                            if (popup) popup.close();
                            return callback(err)
                        }
                        if ("error" in resp) {
                            if (popup) popup.close();
                            var error = new LoginError(resp.status, resp.error);
                            return callback(error)
                        }
                        self._renderAndSubmitWSFedForm(options, resp.form)
                    })
                }

                function return_error(error) {
                    if (callback) return callback(error);
                    throw error
                }
                reqwest({
                    url: "https://" + this._domain + endpoint,
                    method: "post",
                    type: "html",
                    data: query,
                    crossOrigin: true,
                    success: function(resp) {
                        self._renderAndSubmitWSFedForm(options, resp)
                    }
                }).fail(function(err) {
                    var er = err;
                    if (popup) popup.close();
                    if (!er.status || er.status === 0) {
                        er = {};
                        er.status = 401;
                        er.responseText = {
                            code: "invalid_user_password"
                        }
                    }
                    var error = new LoginError(er.status, er.responseText);
                    return return_error(error)
                })
            };
            Auth0.prototype.getDelegationToken = function(targetClientId, id_token, options, callback) {
                if (typeof options === "function") {
                    callback = options;
                    options = {}
                }
                options.id_token = id_token;
                var query = xtend({
                    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
                    target: targetClientId,
                    client_id: this._clientID
                }, options);
                var endpoint = "/delegation";
                if (use_jsonp()) {
                    return jsonp("https://" + this._domain + endpoint + "?" + qs.stringify(query), {
                        param: "cbx",
                        timeout: 15e3
                    }, function(err, resp) {
                        if (err) {
                            return callback(err)
                        }
                        if ("error" in resp) {
                            var error = new LoginError(resp.status, resp.error_description || resp.error);
                            return callback(error)
                        }
                        callback(null, resp)
                    })
                }
                reqwest({
                    url: "https://" + this._domain + endpoint,
                    method: "post",
                    type: "json",
                    data: query,
                    crossOrigin: true,
                    success: function(resp) {
                        callback(null, resp)
                    }
                }).fail(function(err) {
                    try {
                        callback(JSON.parse(err.responseText))
                    } catch (e) {
                        var er = err;
                        if (!er.status || er.status === 0) {
                            er = {};
                            er.status = 401;
                            er.responseText = {
                                code: "invalid_operation"
                            }
                        }
                        callback(new LoginError(er.status, er.responseText))
                    }
                })
            };
            Auth0.prototype.logout = function(query) {
                var url = "https://" + this._domain + "/logout";
                if (query) {
                    url += "?" + qs.stringify(query)
                }
                this._redirect(url)
            };
            Auth0.prototype.getSSOData = function(withActiveDirectories, callback) {
                if (typeof withActiveDirectories === "function") {
                    callback = withActiveDirectories;
                    withActiveDirectories = false
                }
                var url = "https://" + this._domain + "/user/ssodata";
                if (withActiveDirectories) {
                    url += "?" + qs.stringify({
                        ldaps: 1,
                        client_id: this._clientID
                    })
                }
                return jsonp(url, {
                    param: "cbx",
                    timeout: 15e3
                }, function(err, resp) {
                    callback(null, err ? {} : resp)
                })
            };
            Auth0.prototype.getConnections = function(callback) {
                return jsonp("https://" + this._domain + "/public/api/" + this._clientID + "/connections", {
                    param: "cbx",
                    timeout: 15e3
                }, callback)
            };
            module.exports = Auth0
        }, {
            "./LoginError": 17,
            "./assert_required": 18,
            "./base64_url_decode": 19,
            "./json_parse": 21,
            "./use_jsonp": 22,
            jsonp: 25,
            qs: 26,
            reqwest: 27,
            xtend: 29
        }
    ],
    21: [
        function(require, module, exports) {
            module.exports = function(str) {
                return window.JSON ? window.JSON.parse(str) : eval("(" + str + ")")
            }
        }, {}
    ],
    22: [
        function(require, module, exports) {
            module.exports = function() {
                var xhr = window.XMLHttpRequest ? new XMLHttpRequest : null;
                if (xhr && "withCredentials" in xhr) {
                    return false
                }
                return "XDomainRequest" in window && window.location.protocol === "http:"
            }
        }, {}
    ],
    23: [
        function(require, module, exports) {
            (function() {
                var object = typeof exports != "undefined" ? exports : this,
                    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    INVALID_CHARACTER_ERR = function() {
                        try {
                            document.createElement("$")
                        } catch (error) {
                            return error
                        }
                    }();
                object.btoa || (object.btoa = function(input) {
                    for (var block, charCode, idx = 0, map = chars, output = ""; input.charAt(idx | 0) || (map = "=", idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                        charCode = input.charCodeAt(idx += 3 / 4);
                        if (charCode > 255) throw INVALID_CHARACTER_ERR;
                        block = block << 8 | charCode
                    }
                    return output
                });
                object.atob || (object.atob = function(input) {
                    input = input.replace(/=+$/, "");
                    if (input.length % 4 == 1) throw INVALID_CHARACTER_ERR;
                    for (var bc = 0, bs, buffer, idx = 0, output = ""; buffer = input.charAt(idx++);~ buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
                        buffer = chars.indexOf(buffer)
                    }
                    return output
                })
            })()
        }, {}
    ],
    24: [
        function(require, module, exports) {
            module.exports = debug;

            function debug(name) {
                if (!debug.enabled(name)) return function() {};
                return function(fmt) {
                    fmt = coerce(fmt);
                    var curr = new Date;
                    var ms = curr - (debug[name] || curr);
                    debug[name] = curr;
                    fmt = name + " " + fmt + " +" + debug.humanize(ms);
                    window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
            }
            debug.names = [];
            debug.skips = [];
            debug.enable = function(name) {
                try {
                    localStorage.debug = name
                } catch (e) {}
                var split = (name || "").split(/[\s,]+/),
                    len = split.length;
                for (var i = 0; i < len; i++) {
                    name = split[i].replace("*", ".*?");
                    if (name[0] === "-") {
                        debug.skips.push(new RegExp("^" + name.substr(1) + "$"))
                    } else {
                        debug.names.push(new RegExp("^" + name + "$"))
                    }
                }
            };
            debug.disable = function() {
                debug.enable("")
            };
            debug.humanize = function(ms) {
                var sec = 1e3,
                    min = 60 * 1e3,
                    hour = 60 * min;
                if (ms >= hour) return (ms / hour).toFixed(1) + "h";
                if (ms >= min) return (ms / min).toFixed(1) + "m";
                if (ms >= sec) return (ms / sec | 0) + "s";
                return ms + "ms"
            };
            debug.enabled = function(name) {
                for (var i = 0, len = debug.skips.length; i < len; i++) {
                    if (debug.skips[i].test(name)) {
                        return false
                    }
                }
                for (var i = 0, len = debug.names.length; i < len; i++) {
                    if (debug.names[i].test(name)) {
                        return true
                    }
                }
                return false
            };

            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val
            }
            try {
                if (window.localStorage) debug.enable(localStorage.debug)
            } catch (e) {}
        }, {}
    ],
    25: [
        function(require, module, exports) {
            var debug = require("debug")("jsonp");
            module.exports = jsonp;
            var count = 0;

            function noop() {}

            function jsonp(url, opts, fn) {
                if ("function" == typeof opts) {
                    fn = opts;
                    opts = {}
                }
                var opts = opts || {};
                var param = opts.param || "callback";
                var timeout = null != opts.timeout ? opts.timeout : 6e4;
                var enc = encodeURIComponent;
                var target = document.getElementsByTagName("script")[0];
                var script;
                var timer;
                var id = count++;
                if (timeout) {
                    timer = setTimeout(function() {
                        cleanup();
                        fn && fn(new Error("Timeout"))
                    }, timeout)
                }

                function cleanup() {
                    target.parentNode.removeChild(script);
                    window["__jp" + id] = noop
                }
                window["__jp" + id] = function(data) {
                    debug("jsonp got", data);
                    if (timer) clearTimeout(timer);
                    cleanup();
                    fn && fn(null, data)
                };
                url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc("__jp" + id + "");
                url = url.replace("?&", "?");
                debug('jsonp req "%s"', url);
                script = document.createElement("script");
                script.src = url;
                target.parentNode.insertBefore(script, target)
            }
        }, {
            debug: 24
        }
    ],
    26: [
        function(require, module, exports) {
            var toString = Object.prototype.toString;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var isRestorableProto = function() {
                var o;
                if (!Object.create) return false;
                o = Object.create(null);
                o.__proto__ = Object.prototype;
                return o.hasOwnProperty === hasOwnProperty
            }();
            var indexOf = typeof Array.prototype.indexOf === "function" ? function(arr, el) {
                    return arr.indexOf(el)
                } : function(arr, el) {
                    if (typeof arr == "string" && typeof "a" [0] == "undefined") {
                        arr = arr.split("")
                    }
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] === el) return i
                    }
                    return -1
                };
            var isArray = Array.isArray || function(arr) {
                    return toString.call(arr) == "[object Array]"
                };
            var objectKeys = Object.keys || function(obj) {
                    var ret = [];
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            ret.push(key)
                        }
                    }
                    return ret
                };
            var forEach = typeof Array.prototype.forEach === "function" ? function(arr, fn) {
                    return arr.forEach(fn)
                } : function(arr, fn) {
                    for (var i = 0; i < arr.length; i++) fn(arr[i])
                };
            var reduce = function(arr, fn, initial) {
                if (typeof arr.reduce === "function") return arr.reduce(fn, initial);
                var res = initial;
                for (var i = 0; i < arr.length; i++) res = fn(res, arr[i]);
                return res
            };

            function createObject() {
                return isRestorableProto ? Object.create(null) : {}
            }
            var isint = /^[0-9]+$/;

            function promote(parent, key) {
                if (parent[key].length == 0) return parent[key] = createObject();
                var t = createObject();
                for (var i in parent[key]) {
                    if (hasOwnProperty.call(parent[key], i)) {
                        t[i] = parent[key][i]
                    }
                }
                parent[key] = t;
                return t
            }

            function parse(parts, parent, key, val) {
                var part = parts.shift();
                if (!part) {
                    if (isArray(parent[key])) {
                        parent[key].push(val)
                    } else if ("object" == typeof parent[key]) {
                        parent[key] = val
                    } else if ("undefined" == typeof parent[key]) {
                        parent[key] = val
                    } else {
                        parent[key] = [parent[key], val]
                    }
                } else {
                    var obj = parent[key] = parent[key] || [];
                    if ("]" == part) {
                        if (isArray(obj)) {
                            if ("" != val) obj.push(val)
                        } else if ("object" == typeof obj) {
                            obj[objectKeys(obj).length] = val
                        } else {
                            obj = parent[key] = [parent[key], val]
                        }
                    } else if (~indexOf(part, "]")) {
                        part = part.substr(0, part.length - 1);
                        if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                        parse(parts, obj, part, val)
                    } else {
                        if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                        parse(parts, obj, part, val)
                    }
                }
            }

            function merge(parent, key, val) {
                if (~indexOf(key, "]")) {
                    var parts = key.split("["),
                        len = parts.length,
                        last = len - 1;
                    parse(parts, parent, "base", val)
                } else {
                    if (!isint.test(key) && isArray(parent.base)) {
                        var t = createObject();
                        for (var k in parent.base) t[k] = parent.base[k];
                        parent.base = t
                    }
                    set(parent.base, key, val)
                }
                return parent
            }

            function compact(obj) {
                if ("object" != typeof obj) return obj;
                if (isArray(obj)) {
                    var ret = [];
                    for (var i in obj) {
                        if (hasOwnProperty.call(obj, i)) {
                            ret.push(obj[i])
                        }
                    }
                    return ret
                }
                for (var key in obj) {
                    obj[key] = compact(obj[key])
                }
                return obj
            }

            function restoreProto(obj) {
                if (!isRestorableProto) return obj;
                if (isArray(obj)) return obj;
                if (obj && "object" != typeof obj) return obj;
                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key)) {
                        obj[key] = restoreProto(obj[key])
                    }
                }
                obj.__proto__ = Object.prototype;
                return obj
            }

            function parseObject(obj) {
                var ret = {
                    base: {}
                };
                forEach(objectKeys(obj), function(name) {
                    merge(ret, name, obj[name])
                });
                return compact(ret.base)
            }

            function parseString(str) {
                var ret = reduce(String(str).split("&"), function(ret, pair) {
                    var eql = indexOf(pair, "="),
                        brace = lastBraceInKey(pair),
                        key = pair.substr(0, brace || eql),
                        val = pair.substr(brace || eql, pair.length),
                        val = val.substr(indexOf(val, "=") + 1, val.length);
                    if ("" == key) key = pair, val = "";
                    if ("" == key) return ret;
                    return merge(ret, decode(key), decode(val))
                }, {
                    base: createObject()
                }).base;
                return restoreProto(compact(ret))
            }
            exports.parse = function(str) {
                if (null == str || "" == str) return {};
                return "object" == typeof str ? parseObject(str) : parseString(str)
            };
            var stringify = exports.stringify = function(obj, prefix) {
                if (isArray(obj)) {
                    return stringifyArray(obj, prefix)
                } else if ("[object Object]" == toString.call(obj)) {
                    return stringifyObject(obj, prefix)
                } else if ("string" == typeof obj) {
                    return stringifyString(obj, prefix)
                } else {
                    return prefix + "=" + encodeURIComponent(String(obj))
                }
            };

            function stringifyString(str, prefix) {
                if (!prefix) throw new TypeError("stringify expects an object");
                return prefix + "=" + encodeURIComponent(str)
            }

            function stringifyArray(arr, prefix) {
                var ret = [];
                if (!prefix) throw new TypeError("stringify expects an object");
                for (var i = 0; i < arr.length; i++) {
                    ret.push(stringify(arr[i], prefix + "[" + i + "]"))
                }
                return ret.join("&")
            }

            function stringifyObject(obj, prefix) {
                var ret = [],
                    keys = objectKeys(obj),
                    key;
                for (var i = 0, len = keys.length; i < len; ++i) {
                    key = keys[i];
                    if ("" == key) continue;
                    if (null == obj[key]) {
                        ret.push(encodeURIComponent(key) + "=")
                    } else {
                        ret.push(stringify(obj[key], prefix ? prefix + "[" + encodeURIComponent(key) + "]" : encodeURIComponent(key)))
                    }
                }
                return ret.join("&")
            }

            function set(obj, key, val) {
                var v = obj[key];
                if (undefined === v) {
                    obj[key] = val
                } else if (isArray(v)) {
                    v.push(val)
                } else {
                    obj[key] = [v, val]
                }
            }

            function lastBraceInKey(str) {
                var len = str.length,
                    brace, c;
                for (var i = 0; i < len; ++i) {
                    c = str[i];
                    if ("]" == c) brace = false;
                    if ("[" == c) brace = true;
                    if ("=" == c && !brace) return i
                }
            }

            function decode(str) {
                try {
                    return decodeURIComponent(str.replace(/\+/g, " "))
                } catch (err) {
                    return str
                }
            }
        }, {}
    ],
    27: [
        function(require, module, exports) {
            ! function(name, context, definition) {
                if (typeof module != "undefined" && module.exports) module.exports = definition();
                else if (typeof define == "function" && define.amd) define(definition);
                else context[name] = definition()
            }("reqwest", this, function() {
                var win = window,
                    doc = document,
                    twoHundo = /^(20\d|1223)$/,
                    byTag = "getElementsByTagName",
                    readyState = "readyState",
                    contentType = "Content-Type",
                    requestedWith = "X-Requested-With",
                    head = doc[byTag]("head")[0],
                    uniqid = 0,
                    callbackPrefix = "reqwest_" + +new Date,
                    lastValue, xmlHttpRequest = "XMLHttpRequest",
                    xDomainRequest = "XDomainRequest",
                    noop = function() {}, isArray = typeof Array.isArray == "function" ? Array.isArray : function(a) {
                        return a instanceof Array
                    }, defaultHeaders = {
                        contentType: "application/x-www-form-urlencoded",
                        requestedWith: xmlHttpRequest,
                        accept: {
                            "*": "text/javascript, text/html, application/xml, text/xml, */*",
                            xml: "application/xml, text/xml",
                            html: "text/html",
                            text: "text/plain",
                            json: "application/json, text/javascript",
                            js: "application/javascript, text/javascript"
                        }
                    }, xhr = function(o) {
                        if (o["crossOrigin"] === true) {
                            var xhr = win[xmlHttpRequest] ? new XMLHttpRequest : null;
                            if (xhr && "withCredentials" in xhr) {
                                return xhr
                            } else if (win[xDomainRequest]) {
                                return new XDomainRequest
                            } else {
                                throw new Error("Browser does not support cross-origin requests")
                            }
                        } else if (win[xmlHttpRequest]) {
                            return new XMLHttpRequest
                        } else {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        }
                    }, globalSetupOptions = {
                        dataFilter: function(data) {
                            return data
                        }
                    };

                function handleReadyState(r, success, error) {
                    return function() {
                        if (r._aborted) return error(r.request);
                        if (r.request && r.request[readyState] == 4) {
                            r.request.onreadystatechange = noop;
                            if (twoHundo.test(r.request.status)) success(r.request);
                            else error(r.request)
                        }
                    }
                }

                function setHeaders(http, o) {
                    var headers = o["headers"] || {}, h;
                    headers["Accept"] = headers["Accept"] || defaultHeaders["accept"][o["type"]] || defaultHeaders["accept"]["*"];
                    if (!o["crossOrigin"] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders["requestedWith"];
                    if (!headers[contentType]) headers[contentType] = o["contentType"] || defaultHeaders["contentType"];
                    for (h in headers) headers.hasOwnProperty(h) && "setRequestHeader" in http && http.setRequestHeader(h, headers[h])
                }

                function setCredentials(http, o) {
                    if (typeof o["withCredentials"] !== "undefined" && typeof http.withCredentials !== "undefined") {
                        http.withCredentials = !! o["withCredentials"]
                    }
                }

                function generalCallback(data) {
                    lastValue = data
                }

                function urlappend(url, s) {
                    return url + (/\?/.test(url) ? "&" : "?") + s
                }

                function handleJsonp(o, fn, err, url) {
                    var reqId = uniqid++,
                        cbkey = o["jsonpCallback"] || "callback",
                        cbval = o["jsonpCallbackName"] || reqwest.getcallbackPrefix(reqId),
                        cbreg = new RegExp("((^|\\?|&)" + cbkey + ")=([^&]+)"),
                        match = url.match(cbreg),
                        script = doc.createElement("script"),
                        loaded = 0,
                        isIE10 = navigator.userAgent.indexOf("MSIE 10.0") !== -1;
                    if (match) {
                        if (match[3] === "?") {
                            url = url.replace(cbreg, "$1=" + cbval)
                        } else {
                            cbval = match[3]
                        }
                    } else {
                        url = urlappend(url, cbkey + "=" + cbval)
                    }
                    win[cbval] = generalCallback;
                    script.type = "text/javascript";
                    script.src = url;
                    script.async = true;
                    if (typeof script.onreadystatechange !== "undefined" && !isIE10) {
                        script.event = "onclick";
                        script.htmlFor = script.id = "_reqwest_" + reqId
                    }
                    script.onload = script.onreadystatechange = function() {
                        if (script[readyState] && script[readyState] !== "complete" && script[readyState] !== "loaded" || loaded) {
                            return false
                        }
                        script.onload = script.onreadystatechange = null;
                        script.onclick && script.onclick();
                        fn(lastValue);
                        lastValue = undefined;
                        head.removeChild(script);
                        loaded = 1
                    };
                    head.appendChild(script);
                    return {
                        abort: function() {
                            script.onload = script.onreadystatechange = null;
                            err({}, "Request is aborted: timeout", {});
                            lastValue = undefined;
                            head.removeChild(script);
                            loaded = 1
                        }
                    }
                }

                function getRequest(fn, err) {
                    var o = this.o,
                        method = (o["method"] || "GET").toUpperCase(),
                        url = typeof o === "string" ? o : o["url"],
                        data = o["processData"] !== false && o["data"] && typeof o["data"] !== "string" ? reqwest.toQueryString(o["data"]) : o["data"] || null,
                        http, sendWait = false;
                    if ((o["type"] == "jsonp" || method == "GET") && data) {
                        url = urlappend(url, data);
                        data = null
                    }
                    if (o["type"] == "jsonp") return handleJsonp(o, fn, err, url);
                    http = o.xhr && o.xhr(o) || xhr(o);
                    http.open(method, url, o["async"] === false ? false : true);
                    setHeaders(http, o);
                    setCredentials(http, o);
                    if (win[xDomainRequest] && http instanceof win[xDomainRequest]) {
                        http.onload = fn;
                        http.onerror = err;
                        http.onprogress = function() {};
                        sendWait = true
                    } else {
                        http.onreadystatechange = handleReadyState(this, fn, err)
                    }
                    o["before"] && o["before"](http);
                    if (sendWait) {
                        setTimeout(function() {
                            http.send(data)
                        }, 200)
                    } else {
                        http.send(data)
                    }
                    return http
                }

                function Reqwest(o, fn) {
                    this.o = o;
                    this.fn = fn;
                    init.apply(this, arguments)
                }

                function setType(url) {
                    var m = url.match(/\.(json|jsonp|html|xml)(\?|$)/);
                    return m ? m[1] : "js"
                }

                function init(o, fn) {
                    this.url = typeof o == "string" ? o : o["url"];
                    this.timeout = null;
                    this._fulfilled = false;
                    this._successHandler = function() {};
                    this._fulfillmentHandlers = [];
                    this._errorHandlers = [];
                    this._completeHandlers = [];
                    this._erred = false;
                    this._responseArgs = {};
                    var self = this,
                        type = o["type"] || setType(this.url);
                    fn = fn || function() {};
                    if (o["timeout"]) {
                        this.timeout = setTimeout(function() {
                            self.abort()
                        }, o["timeout"])
                    }
                    if (o["success"]) {
                        this._successHandler = function() {
                            o["success"].apply(o, arguments)
                        }
                    }
                    if (o["error"]) {
                        this._errorHandlers.push(function() {
                            o["error"].apply(o, arguments)
                        })
                    }
                    if (o["complete"]) {
                        this._completeHandlers.push(function() {
                            o["complete"].apply(o, arguments)
                        })
                    }

                    function complete(resp) {
                        o["timeout"] && clearTimeout(self.timeout);
                        self.timeout = null;
                        while (self._completeHandlers.length > 0) {
                            self._completeHandlers.shift()(resp)
                        }
                    }

                    function success(resp) {
                        resp = type !== "jsonp" ? self.request : resp;
                        var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                            r = filteredResponse;
                        try {
                            resp.responseText = r
                        } catch (e) {}
                        if (r) {
                            switch (type) {
                                case "json":
                                    try {
                                        resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")")
                                    } catch (err) {
                                        return error(resp, "Could not parse JSON in response", err)
                                    }
                                    break;
                                case "js":
                                    resp = eval(r);
                                    break;
                                case "html":
                                    resp = r;
                                    break;
                                case "xml":
                                    resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML;
                                    break
                            }
                        }
                        self._responseArgs.resp = resp;
                        self._fulfilled = true;
                        fn(resp);
                        self._successHandler(resp);
                        while (self._fulfillmentHandlers.length > 0) {
                            resp = self._fulfillmentHandlers.shift()(resp)
                        }
                        complete(resp)
                    }

                    function error(resp, msg, t) {
                        resp = self.request;
                        self._responseArgs.resp = resp;
                        self._responseArgs.msg = msg;
                        self._responseArgs.t = t;
                        self._erred = true;
                        while (self._errorHandlers.length > 0) {
                            self._errorHandlers.shift()(resp, msg, t)
                        }
                        complete(resp)
                    }
                    this.request = getRequest.call(this, success, error)
                }
                Reqwest.prototype = {
                    abort: function() {
                        this._aborted = true;
                        this.request.abort()
                    },
                    retry: function() {
                        init.call(this, this.o, this.fn)
                    },
                    then: function(success, fail) {
                        success = success || function() {};
                        fail = fail || function() {};
                        if (this._fulfilled) {
                            this._responseArgs.resp = success(this._responseArgs.resp)
                        } else if (this._erred) {
                            fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
                        } else {
                            this._fulfillmentHandlers.push(success);
                            this._errorHandlers.push(fail)
                        }
                        return this
                    },
                    always: function(fn) {
                        if (this._fulfilled || this._erred) {
                            fn(this._responseArgs.resp)
                        } else {
                            this._completeHandlers.push(fn)
                        }
                        return this
                    },
                    fail: function(fn) {
                        if (this._erred) {
                            fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
                        } else {
                            this._errorHandlers.push(fn)
                        }
                        return this
                    }
                };

                function reqwest(o, fn) {
                    return new Reqwest(o, fn)
                }

                function normalize(s) {
                    return s ? s.replace(/\r?\n/g, "\r\n") : ""
                }

                function serial(el, cb) {
                    var n = el.name,
                        t = el.tagName.toLowerCase(),
                        optCb = function(o) {
                            if (o && !o["disabled"]) cb(n, normalize(o["attributes"]["value"] && o["attributes"]["value"]["specified"] ? o["value"] : o["text"]))
                        }, ch, ra, val, i;
                    if (el.disabled || !n) return;
                    switch (t) {
                        case "input":
                            if (!/reset|button|image|file/i.test(el.type)) {
                                ch = /checkbox/i.test(el.type);
                                ra = /radio/i.test(el.type);
                                val = el.value;
                                (!(ch || ra) || el.checked) && cb(n, normalize(ch && val === "" ? "on" : val))
                            }
                            break;
                        case "textarea":
                            cb(n, normalize(el.value));
                            break;
                        case "select":
                            if (el.type.toLowerCase() === "select-one") {
                                optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
                            } else {
                                for (i = 0; el.length && i < el.length; i++) {
                                    el.options[i].selected && optCb(el.options[i])
                                }
                            }
                            break
                    }
                }

                function eachFormElement() {
                    var cb = this,
                        e, i, serializeSubtags = function(e, tags) {
                            var i, j, fa;
                            for (i = 0; i < tags.length; i++) {
                                fa = e[byTag](tags[i]);
                                for (j = 0; j < fa.length; j++) serial(fa[j], cb)
                            }
                        };
                    for (i = 0; i < arguments.length; i++) {
                        e = arguments[i];
                        if (/input|select|textarea/i.test(e.tagName)) serial(e, cb);
                        serializeSubtags(e, ["input", "select", "textarea"])
                    }
                }

                function serializeQueryString() {
                    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
                }

                function serializeHash() {
                    var hash = {};
                    eachFormElement.apply(function(name, value) {
                        if (name in hash) {
                            hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]]);
                            hash[name].push(value)
                        } else hash[name] = value
                    }, arguments);
                    return hash
                }
                reqwest.serializeArray = function() {
                    var arr = [];
                    eachFormElement.apply(function(name, value) {
                        arr.push({
                            name: name,
                            value: value
                        })
                    }, arguments);
                    return arr
                };
                reqwest.serialize = function() {
                    if (arguments.length === 0) return "";
                    var opt, fn, args = Array.prototype.slice.call(arguments, 0);
                    opt = args.pop();
                    opt && opt.nodeType && args.push(opt) && (opt = null);
                    opt && (opt = opt.type);
                    if (opt == "map") fn = serializeHash;
                    else if (opt == "array") fn = reqwest.serializeArray;
                    else fn = serializeQueryString;
                    return fn.apply(null, args)
                };
                reqwest.toQueryString = function(o, trad) {
                    var prefix, i, traditional = trad || false,
                        s = [],
                        enc = encodeURIComponent,
                        add = function(key, value) {
                            value = "function" === typeof value ? value() : value == null ? "" : value;
                            s[s.length] = enc(key) + "=" + enc(value)
                        };
                    if (isArray(o)) {
                        for (i = 0; o && i < o.length; i++) add(o[i]["name"], o[i]["value"])
                    } else {
                        for (prefix in o) {
                            if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
                        }
                    }
                    return s.join("&").replace(/%20/g, "+")
                };

                function buildParams(prefix, obj, traditional, add) {
                    var name, i, v, rbracket = /\[\]$/;
                    if (isArray(obj)) {
                        for (i = 0; obj && i < obj.length; i++) {
                            v = obj[i];
                            if (traditional || rbracket.test(prefix)) {
                                add(prefix, v)
                            } else {
                                buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add)
                            }
                        }
                    } else if (obj && obj.toString() === "[object Object]") {
                        for (name in obj) {
                            buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
                        }
                    } else {
                        add(prefix, obj)
                    }
                }
                reqwest.getcallbackPrefix = function() {
                    return callbackPrefix
                };
                reqwest.compat = function(o, fn) {
                    if (o) {
                        o["type"] && (o["method"] = o["type"]) && delete o["type"];
                        o["dataType"] && (o["type"] = o["dataType"]);
                        o["jsonpCallback"] && (o["jsonpCallbackName"] = o["jsonpCallback"]) && delete o["jsonpCallback"];
                        o["jsonp"] && (o["jsonpCallback"] = o["jsonp"])
                    }
                    return new Reqwest(o, fn)
                };
                reqwest.ajaxSetup = function(options) {
                    options = options || {};
                    for (var k in options) {
                        globalSetupOptions[k] = options[k]
                    }
                };
                return reqwest
            })
        }, {}
    ],
    28: [
        function(require, module, exports) {
            module.exports = hasKeys;

            function hasKeys(source) {
                return source !== null && (typeof source === "object" || typeof source === "function")
            }
        }, {}
    ],
    29: [
        function(require, module, exports) {
            var Keys = require("object-keys");
            var hasKeys = require("./has-keys");
            module.exports = extend;

            function extend() {
                var target = {};
                for (var i = 0; i < arguments.length; i++) {
                    var source = arguments[i];
                    if (!hasKeys(source)) {
                        continue
                    }
                    var keys = Keys(source);
                    for (var j = 0; j < keys.length; j++) {
                        var name = keys[j];
                        target[name] = source[name]
                    }
                }
                return target
            }
        }, {
            "./has-keys": 28,
            "object-keys": 31
        }
    ],
    30: [
        function(require, module, exports) {
            var hasOwn = Object.prototype.hasOwnProperty;
            var toString = Object.prototype.toString;
            var isFunction = function(fn) {
                var isFunc = typeof fn === "function" && !(fn instanceof RegExp) || toString.call(fn) === "[object Function]";
                if (!isFunc && typeof window !== "undefined") {
                    isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt
                }
                return isFunc
            };
            module.exports = function forEach(obj, fn) {
                if (!isFunction(fn)) {
                    throw new TypeError("iterator must be a function")
                }
                var i, k, isString = typeof obj === "string",
                    l = obj.length,
                    context = arguments.length > 2 ? arguments[2] : null;
                if (l === +l) {
                    for (i = 0; i < l; i++) {
                        if (context === null) {
                            fn(isString ? obj.charAt(i) : obj[i], i, obj)
                        } else {
                            fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj)
                        }
                    }
                } else {
                    for (k in obj) {
                        if (hasOwn.call(obj, k)) {
                            if (context === null) {
                                fn(obj[k], k, obj)
                            } else {
                                fn.call(context, obj[k], k, obj)
                            }
                        }
                    }
                }
            }
        }, {}
    ],
    31: [
        function(require, module, exports) {
            module.exports = Object.keys || require("./shim")
        }, {
            "./shim": 33
        }
    ],
    32: [
        function(require, module, exports) {
            var toString = Object.prototype.toString;
            module.exports = function isArguments(value) {
                var str = toString.call(value);
                var isArguments = str === "[object Arguments]";
                if (!isArguments) {
                    isArguments = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toString.call(value.callee) === "[object Function]"
                }
                return isArguments
            }
        }, {}
    ],
    33: [
        function(require, module, exports) {
            (function() {
                "use strict";
                var has = Object.prototype.hasOwnProperty,
                    toString = Object.prototype.toString,
                    forEach = require("./foreach"),
                    isArgs = require("./isArguments"),
                    hasDontEnumBug = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    hasProtoEnumBug = function() {}.propertyIsEnumerable("prototype"),
                    dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    keysShim;
                keysShim = function keys(object) {
                    var isObject = object !== null && typeof object === "object",
                        isFunction = toString.call(object) === "[object Function]",
                        isArguments = isArgs(object),
                        theKeys = [];
                    if (!isObject && !isFunction && !isArguments) {
                        throw new TypeError("Object.keys called on a non-object")
                    }
                    if (isArguments) {
                        forEach(object, function(value) {
                            theKeys.push(value)
                        })
                    } else {
                        var name, skipProto = hasProtoEnumBug && isFunction;
                        for (name in object) {
                            if (!(skipProto && name === "prototype") && has.call(object, name)) {
                                theKeys.push(name)
                            }
                        }
                    } if (hasDontEnumBug) {
                        var ctor = object.constructor,
                            skipConstructor = ctor && ctor.prototype === object;
                        forEach(dontEnums, function(dontEnum) {
                            if (!(skipConstructor && dontEnum === "constructor") && has.call(object, dontEnum)) {
                                theKeys.push(dontEnum)
                            }
                        })
                    }
                    return theKeys
                };
                module.exports = keysShim
            })()
        }, {
            "./foreach": 30,
            "./isArguments": 32
        }
    ],
    34: [
        function(require, module, exports) {
            (function(name, context, definition) {
                if (typeof module != "undefined" && module.exports) module.exports = definition();
                else if (typeof define == "function" && define.amd) define(definition);
                else context[name] = definition()
            })("bean", this, function(name, context) {
                name = name || "bean";
                context = context || this;
                var win = window,
                    old = context[name],
                    namespaceRegex = /[^\.]*(?=\..*)\.|.*/,
                    nameRegex = /\..*/,
                    addEvent = "addEventListener",
                    removeEvent = "removeEventListener",
                    doc = document || {}, root = doc.documentElement || {}, W3C_MODEL = root[addEvent],
                    eventSupport = W3C_MODEL ? addEvent : "attachEvent",
                    ONE = {}, slice = Array.prototype.slice,
                    str2arr = function(s, d) {
                        return s.split(d || " ")
                    }, isString = function(o) {
                        return typeof o == "string"
                    }, isFunction = function(o) {
                        return typeof o == "function"
                    }, standardNativeEvents = "click dblclick mouseup mousedown contextmenu " + "mousewheel mousemultiwheel DOMMouseScroll " + "mouseover mouseout mousemove selectstart selectend " + "keydown keypress keyup " + "orientationchange " + "focus blur change reset select submit " + "load unload beforeunload resize move DOMContentLoaded " + "readystatechange message " + "error abort scroll ",
                    w3cNativeEvents = "show " + "input invalid " + "touchstart touchmove touchend touchcancel " + "gesturestart gesturechange gestureend " + "textinput" + "readystatechange pageshow pagehide popstate " + "hashchange offline online " + "afterprint beforeprint " + "dragstart dragenter dragover dragleave drag drop dragend " + "loadstart progress suspend emptied stalled loadmetadata " + "loadeddata canplay canplaythrough playing waiting seeking " + "seeked ended durationchange timeupdate play pause ratechange " + "volumechange cuechange " + "checking noupdate downloading cached updateready obsolete ",
                    nativeEvents = function(hash, events, i) {
                        for (i = 0; i < events.length; i++) events[i] && (hash[events[i]] = 1);
                        return hash
                    }({}, str2arr(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : ""))),
                    customEvents = function() {
                        var isAncestor = "compareDocumentPosition" in root ? function(element, container) {
                                return container.compareDocumentPosition && (container.compareDocumentPosition(element) & 16) === 16
                            } : "contains" in root ? function(element, container) {
                                container = container.nodeType === 9 || container === window ? root : container;
                                return container !== element && container.contains(element)
                            } : function(element, container) {
                                while (element = element.parentNode)
                                    if (element === container) return 1;
                                return 0
                            }, check = function(event) {
                                var related = event.relatedTarget;
                                return !related ? related == null : related !== this && related.prefix !== "xul" && !/document/.test(this.toString()) && !isAncestor(related, this)
                            };
                        return {
                            mouseenter: {
                                base: "mouseover",
                                condition: check
                            },
                            mouseleave: {
                                base: "mouseout",
                                condition: check
                            },
                            mousewheel: {
                                base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
                            }
                        }
                    }(),
                    Event = function() {
                        var commonProps = str2arr("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget " + "detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey " + "srcElement target timeStamp type view which propertyName"),
                            mouseProps = commonProps.concat(str2arr("button buttons clientX clientY dataTransfer " + "fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
                            mouseWheelProps = mouseProps.concat(str2arr("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ " + "axis")),
                            keyProps = commonProps.concat(str2arr("char charCode key keyCode keyIdentifier " + "keyLocation location")),
                            textProps = commonProps.concat(str2arr("data")),
                            touchProps = commonProps.concat(str2arr("touches targetTouches changedTouches scale rotation")),
                            messageProps = commonProps.concat(str2arr("data origin source")),
                            stateProps = commonProps.concat(str2arr("state")),
                            overOutRegex = /over|out/,
                            typeFixers = [{
                                reg: /key/i,
                                fix: function(event, newEvent) {
                                    newEvent.keyCode = event.keyCode || event.which;
                                    return keyProps
                                }
                            }, {
                                reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                                fix: function(event, newEvent, type) {
                                    newEvent.rightClick = event.which === 3 || event.button === 2;
                                    newEvent.pos = {
                                        x: 0,
                                        y: 0
                                    };
                                    if (event.pageX || event.pageY) {
                                        newEvent.clientX = event.pageX;
                                        newEvent.clientY = event.pageY
                                    } else if (event.clientX || event.clientY) {
                                        newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft;
                                        newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
                                    }
                                    if (overOutRegex.test(type)) {
                                        newEvent.relatedTarget = event.relatedTarget || event[(type == "mouseover" ? "from" : "to") + "Element"]
                                    }
                                    return mouseProps
                                }
                            }, {
                                reg: /mouse.*(wheel|scroll)/i,
                                fix: function() {
                                    return mouseWheelProps
                                }
                            }, {
                                reg: /^text/i,
                                fix: function() {
                                    return textProps
                                }
                            }, {
                                reg: /^touch|^gesture/i,
                                fix: function() {
                                    return touchProps
                                }
                            }, {
                                reg: /^message$/i,
                                fix: function() {
                                    return messageProps
                                }
                            }, {
                                reg: /^popstate$/i,
                                fix: function() {
                                    return stateProps
                                }
                            }, {
                                reg: /.*/,
                                fix: function() {
                                    return commonProps
                                }
                            }],
                            typeFixerMap = {}, Event = function(event, element, isNative) {
                                if (!arguments.length) return;
                                event = event || ((element.ownerDocument || element.document || element).parentWindow || win).event;
                                this.originalEvent = event;
                                this.isNative = isNative;
                                this.isBean = true;
                                if (!event) return;
                                var type = event.type,
                                    target = event.target || event.srcElement,
                                    i, l, p, props, fixer;
                                this.target = target && target.nodeType === 3 ? target.parentNode : target;
                                if (isNative) {
                                    fixer = typeFixerMap[type];
                                    if (!fixer) {
                                        for (i = 0, l = typeFixers.length; i < l; i++) {
                                            if (typeFixers[i].reg.test(type)) {
                                                typeFixerMap[type] = fixer = typeFixers[i].fix;
                                                break
                                            }
                                        }
                                    }
                                    props = fixer(event, this, type);
                                    for (i = props.length; i--;) {
                                        if (!((p = props[i]) in this) && p in event) this[p] = event[p]
                                    }
                                }
                            };
                        Event.prototype.preventDefault = function() {
                            if (this.originalEvent.preventDefault) this.originalEvent.preventDefault();
                            else this.originalEvent.returnValue = false
                        };
                        Event.prototype.stopPropagation = function() {
                            if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation();
                            else this.originalEvent.cancelBubble = true
                        };
                        Event.prototype.stop = function() {
                            this.preventDefault();
                            this.stopPropagation();
                            this.stopped = true
                        };
                        Event.prototype.stopImmediatePropagation = function() {
                            if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation();
                            this.isImmediatePropagationStopped = function() {
                                return true
                            }
                        };
                        Event.prototype.isImmediatePropagationStopped = function() {
                            return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
                        };
                        Event.prototype.clone = function(currentTarget) {
                            var ne = new Event(this, this.element, this.isNative);
                            ne.currentTarget = currentTarget;
                            return ne
                        };
                        return Event
                    }(),
                    targetElement = function(element, isNative) {
                        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
                    }, RegEntry = function() {
                        var wrappedHandler = function(element, fn, condition, args) {
                            var call = function(event, eargs) {
                                return fn.apply(element, args ? slice.call(eargs, event ? 0 : 1).concat(args) : eargs)
                            }, findTarget = function(event, eventElement) {
                                    return fn.__beanDel ? fn.__beanDel.ft(event.target, element) : eventElement
                                }, handler = condition ? function(event) {
                                    var target = findTarget(event, this);
                                    if (condition.apply(target, arguments)) {
                                        if (event) event.currentTarget = target;
                                        return call(event, arguments)
                                    }
                                } : function(event) {
                                    if (fn.__beanDel) event = event.clone(findTarget(event));
                                    return call(event, arguments)
                                };
                            handler.__beanDel = fn.__beanDel;
                            return handler
                        }, RegEntry = function(element, type, handler, original, namespaces, args, root) {
                                var customType = customEvents[type],
                                    isNative;
                                if (type == "unload") {
                                    handler = once(removeListener, element, type, handler, original)
                                }
                                if (customType) {
                                    if (customType.condition) {
                                        handler = wrappedHandler(element, handler, customType.condition, args)
                                    }
                                    type = customType.base || type
                                }
                                this.isNative = isNative = nativeEvents[type] && !! element[eventSupport];
                                this.customType = !W3C_MODEL && !isNative && type;
                                this.element = element;
                                this.type = type;
                                this.original = original;
                                this.namespaces = namespaces;
                                this.eventType = W3C_MODEL || isNative ? type : "propertychange";
                                this.target = targetElement(element, isNative);
                                this[eventSupport] = !! this.target[eventSupport];
                                this.root = root;
                                this.handler = wrappedHandler(element, handler, null, args)
                            };
                        RegEntry.prototype.inNamespaces = function(checkNamespaces) {
                            var i, j, c = 0;
                            if (!checkNamespaces) return true;
                            if (!this.namespaces) return false;
                            for (i = checkNamespaces.length; i--;) {
                                for (j = this.namespaces.length; j--;) {
                                    if (checkNamespaces[i] == this.namespaces[j]) c++
                                }
                            }
                            return checkNamespaces.length === c
                        };
                        RegEntry.prototype.matches = function(checkElement, checkOriginal, checkHandler) {
                            return this.element === checkElement && (!checkOriginal || this.original === checkOriginal) && (!checkHandler || this.handler === checkHandler)
                        };
                        return RegEntry
                    }(),
                    registry = function() {
                        var map = {}, forAll = function(element, type, original, handler, root, fn) {
                                var pfx = root ? "r" : "$";
                                if (!type || type == "*") {
                                    for (var t in map) {
                                        if (t.charAt(0) == pfx) {
                                            forAll(element, t.substr(1), original, handler, root, fn)
                                        }
                                    }
                                } else {
                                    var i = 0,
                                        l, list = map[pfx + type],
                                        all = element == "*";
                                    if (!list) return;
                                    for (l = list.length; i < l; i++) {
                                        if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) return
                                    }
                                }
                            }, has = function(element, type, original, root) {
                                var i, list = map[(root ? "r" : "$") + type];
                                if (list) {
                                    for (i = list.length; i--;) {
                                        if (!list[i].root && list[i].matches(element, original, null)) return true
                                    }
                                }
                                return false
                            }, get = function(element, type, original, root) {
                                var entries = [];
                                forAll(element, type, original, null, root, function(entry) {
                                    return entries.push(entry)
                                });
                                return entries
                            }, put = function(entry) {
                                var has = !entry.root && !this.has(entry.element, entry.type, null, false),
                                    key = (entry.root ? "r" : "$") + entry.type;
                                (map[key] || (map[key] = [])).push(entry);
                                return has
                            }, del = function(entry) {
                                forAll(entry.element, entry.type, null, entry.handler, entry.root, function(entry, list, i) {
                                    list.splice(i, 1);
                                    entry.removed = true;
                                    if (list.length === 0) delete map[(entry.root ? "r" : "$") + entry.type];
                                    return false
                                })
                            }, entries = function() {
                                var t, entries = [];
                                for (t in map) {
                                    if (t.charAt(0) == "$") entries = entries.concat(map[t])
                                }
                                return entries
                            };
                        return {
                            has: has,
                            get: get,
                            put: put,
                            del: del,
                            entries: entries
                        }
                    }(),
                    selectorEngine, setSelectorEngine = function(e) {
                        if (!arguments.length) {
                            selectorEngine = doc.querySelectorAll ? function(s, r) {
                                return r.querySelectorAll(s)
                            } : function() {
                                throw new Error("Bean: No selector engine installed")
                            }
                        } else {
                            selectorEngine = e
                        }
                    }, rootListener = function(event, type) {
                        if (!W3C_MODEL && type && event && event.propertyName != "_on" + type) return;
                        var listeners = registry.get(this, type || event.type, null, false),
                            l = listeners.length,
                            i = 0;
                        event = new Event(event, this, true);
                        if (type) event.type = type;
                        for (; i < l && !event.isImmediatePropagationStopped(); i++) {
                            if (!listeners[i].removed) listeners[i].handler.call(this, event)
                        }
                    }, listener = W3C_MODEL ? function(element, type, add) {
                        element[add ? addEvent : removeEvent](type, rootListener, false)
                    } : function(element, type, add, custom) {
                        var entry;
                        if (add) {
                            registry.put(entry = new RegEntry(element, custom || type, function(event) {
                                rootListener.call(element, event, custom)
                            }, rootListener, null, null, true));
                            if (custom && element["_on" + custom] == null) element["_on" + custom] = 0;
                            entry.target.attachEvent("on" + entry.eventType, entry.handler)
                        } else {
                            entry = registry.get(element, custom || type, rootListener, true)[0];
                            if (entry) {
                                entry.target.detachEvent("on" + entry.eventType, entry.handler);
                                registry.del(entry)
                            }
                        }
                    }, once = function(rm, element, type, fn, originalFn) {
                        return function() {
                            fn.apply(this, arguments);
                            rm(element, type, originalFn)
                        }
                    }, removeListener = function(element, orgType, handler, namespaces) {
                        var type = orgType && orgType.replace(nameRegex, ""),
                            handlers = registry.get(element, type, null, false),
                            removed = {}, i, l;
                        for (i = 0, l = handlers.length; i < l; i++) {
                            if ((!handler || handlers[i].original === handler) && handlers[i].inNamespaces(namespaces)) {
                                registry.del(handlers[i]);
                                if (!removed[handlers[i].eventType] && handlers[i][eventSupport]) removed[handlers[i].eventType] = {
                                    t: handlers[i].eventType,
                                    c: handlers[i].type
                                }
                            }
                        }
                        for (i in removed) {
                            if (!registry.has(element, removed[i].t, null, false)) {
                                listener(element, removed[i].t, false, removed[i].c)
                            }
                        }
                    }, delegate = function(selector, fn) {
                        var findTarget = function(target, root) {
                            var i, array = isString(selector) ? selectorEngine(selector, root) : selector;
                            for (; target && target !== root; target = target.parentNode) {
                                for (i = array.length; i--;) {
                                    if (array[i] === target) return target
                                }
                            }
                        }, handler = function(e) {
                                var match = findTarget(e.target, this);
                                if (match) fn.apply(match, arguments)
                            };
                        handler.__beanDel = {
                            ft: findTarget,
                            selector: selector
                        };
                        return handler
                    }, fireListener = W3C_MODEL ? function(isNative, type, element) {
                        var evt = doc.createEvent(isNative ? "HTMLEvents" : "UIEvents");
                        evt[isNative ? "initEvent" : "initUIEvent"](type, true, true, win, 1);
                        element.dispatchEvent(evt)
                    } : function(isNative, type, element) {
                        element = targetElement(element, isNative);
                        isNative ? element.fireEvent("on" + type, doc.createEventObject()) : element["_on" + type]++
                    }, off = function(element, typeSpec, fn) {
                        var isTypeStr = isString(typeSpec),
                            k, type, namespaces, i;
                        if (isTypeStr && typeSpec.indexOf(" ") > 0) {
                            typeSpec = str2arr(typeSpec);
                            for (i = typeSpec.length; i--;) off(element, typeSpec[i], fn);
                            return element
                        }
                        type = isTypeStr && typeSpec.replace(nameRegex, "");
                        if (type && customEvents[type]) type = customEvents[type].base;
                        if (!typeSpec || isTypeStr) {
                            if (namespaces = isTypeStr && typeSpec.replace(namespaceRegex, "")) namespaces = str2arr(namespaces, ".");
                            removeListener(element, type, fn, namespaces)
                        } else if (isFunction(typeSpec)) {
                            removeListener(element, null, typeSpec)
                        } else {
                            for (k in typeSpec) {
                                if (typeSpec.hasOwnProperty(k)) off(element, k, typeSpec[k])
                            }
                        }
                        return element
                    }, on = function(element, events, selector, fn) {
                        var originalFn, type, types, i, args, entry, first;
                        if (selector === undefined && typeof events == "object") {
                            for (type in events) {
                                if (events.hasOwnProperty(type)) {
                                    on.call(this, element, type, events[type])
                                }
                            }
                            return
                        }
                        if (!isFunction(selector)) {
                            originalFn = fn;
                            args = slice.call(arguments, 4);
                            fn = delegate(selector, originalFn, selectorEngine)
                        } else {
                            args = slice.call(arguments, 3);
                            fn = originalFn = selector
                        }
                        types = str2arr(events);
                        if (this === ONE) {
                            fn = once(off, element, events, fn, originalFn)
                        }
                        for (i = types.length; i--;) {
                            first = registry.put(entry = new RegEntry(element, types[i].replace(nameRegex, ""), fn, originalFn, str2arr(types[i].replace(namespaceRegex, ""), "."), args, false));
                            if (entry[eventSupport] && first) {
                                listener(element, entry.eventType, true, entry.customType)
                            }
                        }
                        return element
                    }, add = function(element, events, fn, delfn) {
                        return on.apply(null, !isString(fn) ? slice.call(arguments) : [element, fn, events, delfn].concat(arguments.length > 3 ? slice.call(arguments, 5) : []))
                    }, one = function() {
                        return on.apply(ONE, arguments)
                    }, fire = function(element, type, args) {
                        var types = str2arr(type),
                            i, j, l, names, handlers;
                        for (i = types.length; i--;) {
                            type = types[i].replace(nameRegex, "");
                            if (names = types[i].replace(namespaceRegex, "")) names = str2arr(names, ".");
                            if (!names && !args && element[eventSupport]) {
                                fireListener(nativeEvents[type], type, element)
                            } else {
                                handlers = registry.get(element, type, null, false);
                                args = [false].concat(args);
                                for (j = 0, l = handlers.length; j < l; j++) {
                                    if (handlers[j].inNamespaces(names)) {
                                        handlers[j].handler.apply(element, args)
                                    }
                                }
                            }
                        }
                        return element
                    }, clone = function(element, from, type) {
                        var handlers = registry.get(from, type, null, false),
                            l = handlers.length,
                            i = 0,
                            args, beanDel;
                        for (; i < l; i++) {
                            if (handlers[i].original) {
                                args = [element, handlers[i].type];
                                if (beanDel = handlers[i].handler.__beanDel) args.push(beanDel.selector);
                                args.push(handlers[i].original);
                                on.apply(null, args)
                            }
                        }
                        return element
                    }, bean = {
                        on: on,
                        add: add,
                        one: one,
                        off: off,
                        remove: off,
                        clone: clone,
                        fire: fire,
                        Event: Event,
                        setSelectorEngine: setSelectorEngine,
                        noConflict: function() {
                            context[name] = old;
                            return this
                        }
                    };
                if (win.attachEvent) {
                    var cleanup = function() {
                        var i, entries = registry.entries();
                        for (i in entries) {
                            if (entries[i].type && entries[i].type !== "unload") off(entries[i].element, entries[i].type)
                        }
                        win.detachEvent("onunload", cleanup);
                        win.CollectGarbage && win.CollectGarbage()
                    };
                    win.attachEvent("onunload", cleanup)
                }
                setSelectorEngine();
                return bean
            })
        }, {}
    ],
    35: [
        function(require, module, exports) {
            (function(name, context, definition) {
                if (typeof module != "undefined" && module.exports) module.exports = definition();
                else if (typeof define == "function" && define.amd) define(definition);
                else context[name] = definition()
            })("bonzo", this, function() {
                var win = window,
                    doc = win.document,
                    html = doc.documentElement,
                    parentNode = "parentNode",
                    specialAttributes = /^(checked|value|selected|disabled)$/i,
                    specialTags = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,
                    simpleScriptTagRe = /\s*<script +src=['"]([^'"]+)['"]>/,
                    table = ["<table>", "</table>", 1],
                    td = ["<table><tbody><tr>", "</tr></tbody></table>", 3],
                    option = ["<select>", "</select>", 1],
                    noscope = ["_", "", 0, 1],
                    tagMap = {
                        thead: table,
                        tbody: table,
                        tfoot: table,
                        colgroup: table,
                        caption: table,
                        tr: ["<table><tbody>", "</tbody></table>", 2],
                        th: td,
                        td: td,
                        col: ["<table><colgroup>", "</colgroup></table>", 2],
                        fieldset: ["<form>", "</form>", 1],
                        legend: ["<form><fieldset>", "</fieldset></form>", 2],
                        option: option,
                        optgroup: option,
                        script: noscope,
                        style: noscope,
                        link: noscope,
                        param: noscope,
                        base: noscope
                    }, stateAttributes = /^(checked|selected|disabled)$/,
                    ie = /msie/i.test(navigator.userAgent),
                    hasClass, addClass, removeClass, uidMap = {}, uuids = 0,
                    digit = /^-?[\d\.]+$/,
                    dattr = /^data-(.+)$/,
                    px = "px",
                    setAttribute = "setAttribute",
                    getAttribute = "getAttribute",
                    byTag = "getElementsByTagName",
                    features = function() {
                        var e = doc.createElement("p");
                        e.innerHTML = '<a href="#x">x</a><table style="float:left;"></table>';
                        return {
                            hrefExtended: e[byTag]("a")[0][getAttribute]("href") != "#x",
                            autoTbody: e[byTag]("tbody").length !== 0,
                            computedStyle: doc.defaultView && doc.defaultView.getComputedStyle,
                            cssFloat: e[byTag]("table")[0].style.styleFloat ? "styleFloat" : "cssFloat",
                            transform: function() {
                                var props = ["transform", "webkitTransform", "MozTransform", "OTransform", "msTransform"],
                                    i;
                                for (i = 0; i < props.length; i++) {
                                    if (props[i] in e.style) return props[i]
                                }
                            }(),
                            classList: "classList" in e,
                            opasity: function() {
                                return typeof doc.createElement("a").style.opacity !== "undefined"
                            }()
                        }
                    }(),
                    trimReplace = /(^\s*|\s*$)/g,
                    whitespaceRegex = /\s+/,
                    toString = String.prototype.toString,
                    unitless = {
                        lineHeight: 1,
                        zoom: 1,
                        zIndex: 1,
                        opacity: 1,
                        boxFlex: 1,
                        WebkitBoxFlex: 1,
                        MozBoxFlex: 1
                    }, query = doc.querySelectorAll && function(selector) {
                        return doc.querySelectorAll(selector)
                    }, trim = String.prototype.trim ? function(s) {
                        return s.trim()
                    } : function(s) {
                        return s.replace(trimReplace, "")
                    }, getStyle = features.computedStyle ? function(el, property) {
                        var value = null,
                            computed = doc.defaultView.getComputedStyle(el, "");
                        computed && (value = computed[property]);
                        return el.style[property] || value
                    } : !(ie && html.currentStyle) ? function(el, property) {
                        return el.style[property]
                    } : function(el, property) {
                        var val, value;
                        if (property == "opacity" && !features.opasity) {
                            val = 100;
                            try {
                                val = el["filters"]["DXImageTransform.Microsoft.Alpha"].opacity
                            } catch (e1) {
                                try {
                                    val = el["filters"]("alpha").opacity
                                } catch (e2) {}
                            }
                            return val / 100
                        }
                        value = el.currentStyle ? el.currentStyle[property] : null;
                        return el.style[property] || value
                    };

                function isNode(node) {
                    return node && node.nodeName && (node.nodeType == 1 || node.nodeType == 11)
                }

                function normalize(node, host, clone) {
                    var i, l, ret;
                    if (typeof node == "string") return bonzo.create(node);
                    if (isNode(node)) node = [node];
                    if (clone) {
                        ret = [];
                        for (i = 0, l = node.length; i < l; i++) ret[i] = cloneNode(host, node[i]);
                        return ret
                    }
                    return node
                }

                function classReg(c) {
                    return new RegExp("(^|\\s+)" + c + "(\\s+|$)")
                }

                function each(ar, fn, opt_scope, opt_rev) {
                    var ind, i = 0,
                        l = ar.length;
                    for (; i < l; i++) {
                        ind = opt_rev ? ar.length - i - 1 : i;
                        fn.call(opt_scope || ar[ind], ar[ind], ind, ar)
                    }
                    return ar
                }

                function deepEach(ar, fn, opt_scope) {
                    for (var i = 0, l = ar.length; i < l; i++) {
                        if (isNode(ar[i])) {
                            deepEach(ar[i].childNodes, fn, opt_scope);
                            fn.call(opt_scope || ar[i], ar[i], i, ar)
                        }
                    }
                    return ar
                }

                function camelize(s) {
                    return s.replace(/-(.)/g, function(m, m1) {
                        return m1.toUpperCase()
                    })
                }

                function decamelize(s) {
                    return s ? s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : s
                }

                function data(el) {
                    el[getAttribute]("data-node-uid") || el[setAttribute]("data-node-uid", ++uuids);
                    var uid = el[getAttribute]("data-node-uid");
                    return uidMap[uid] || (uidMap[uid] = {})
                }

                function clearData(el) {
                    var uid = el[getAttribute]("data-node-uid");
                    if (uid) delete uidMap[uid]
                }

                function dataValue(d) {
                    var f;
                    try {
                        return d === null || d === undefined ? undefined : d === "true" ? true : d === "false" ? false : d === "null" ? null : (f = parseFloat(d)) == d ? f : d
                    } catch (e) {}
                    return undefined
                }

                function some(ar, fn, opt_scope) {
                    for (var i = 0, j = ar.length; i < j; ++i)
                        if (fn.call(opt_scope || null, ar[i], i, ar)) return true;
                    return false
                }

                function styleProperty(p) {
                    p == "transform" && (p = features.transform) || /^transform-?[Oo]rigin$/.test(p) && (p = features.transform + "Origin") || p == "float" && (p = features.cssFloat);
                    return p ? camelize(p) : null
                }

                function insert(target, host, fn, rev) {
                    var i = 0,
                        self = host || this,
                        r = [],
                        nodes = query && typeof target == "string" && target.charAt(0) != "<" ? query(target) : target;
                    each(normalize(nodes), function(t, j) {
                        each(self, function(el) {
                            fn(t, r[i++] = j > 0 ? cloneNode(self, el) : el)
                        }, null, rev)
                    }, this, rev);
                    self.length = i;
                    each(r, function(e) {
                        self[--i] = e
                    }, null, !rev);
                    return self
                }

                function xy(el, x, y) {
                    var $el = bonzo(el),
                        style = $el.css("position"),
                        offset = $el.offset(),
                        rel = "relative",
                        isRel = style == rel,
                        delta = [parseInt($el.css("left"), 10), parseInt($el.css("top"), 10)];
                    if (style == "static") {
                        $el.css("position", rel);
                        style = rel
                    }
                    isNaN(delta[0]) && (delta[0] = isRel ? 0 : el.offsetLeft);
                    isNaN(delta[1]) && (delta[1] = isRel ? 0 : el.offsetTop);
                    x != null && (el.style.left = x - offset.left + delta[0] + px);
                    y != null && (el.style.top = y - offset.top + delta[1] + px)
                }
                if (features.classList) {
                    hasClass = function(el, c) {
                        return el.classList.contains(c)
                    };
                    addClass = function(el, c) {
                        el.classList.add(c)
                    };
                    removeClass = function(el, c) {
                        el.classList.remove(c)
                    }
                } else {
                    hasClass = function(el, c) {
                        return classReg(c).test(el.className)
                    };
                    addClass = function(el, c) {
                        el.className = trim(el.className + " " + c)
                    };
                    removeClass = function(el, c) {
                        el.className = trim(el.className.replace(classReg(c), " "))
                    }
                }

                function setter(el, v) {
                    return typeof v == "function" ? v(el) : v
                }

                function scroll(x, y, type) {
                    var el = this[0];
                    if (!el) return this;
                    if (x == null && y == null) {
                        return (isBody(el) ? getWindowScroll() : {
                            x: el.scrollLeft,
                            y: el.scrollTop
                        })[type]
                    }
                    if (isBody(el)) {
                        win.scrollTo(x, y)
                    } else {
                        x != null && (el.scrollLeft = x);
                        y != null && (el.scrollTop = y)
                    }
                    return this
                }

                function Bonzo(elements) {
                    this.length = 0;
                    if (elements) {
                        elements = typeof elements !== "string" && !elements.nodeType && typeof elements.length !== "undefined" ? elements : [elements];
                        this.length = elements.length;
                        for (var i = 0; i < elements.length; i++) this[i] = elements[i]
                    }
                }
                Bonzo.prototype = {
                    get: function(index) {
                        return this[index] || null
                    },
                    each: function(fn, opt_scope) {
                        return each(this, fn, opt_scope)
                    },
                    deepEach: function(fn, opt_scope) {
                        return deepEach(this, fn, opt_scope)
                    },
                    map: function(fn, opt_reject) {
                        var m = [],
                            n, i;
                        for (i = 0; i < this.length; i++) {
                            n = fn.call(this, this[i], i);
                            opt_reject ? opt_reject(n) && m.push(n) : m.push(n)
                        }
                        return m
                    },
                    html: function(h, opt_text) {
                        var method = opt_text ? html.textContent === undefined ? "innerText" : "textContent" : "innerHTML",
                            that = this,
                            append = function(el, i) {
                                each(normalize(h, that, i), function(node) {
                                    el.appendChild(node)
                                })
                            }, updateElement = function(el, i) {
                                try {
                                    if (opt_text || typeof h == "string" && !specialTags.test(el.tagName)) {
                                        return el[method] = h
                                    }
                                } catch (e) {}
                                append(el, i)
                            };
                        return typeof h != "undefined" ? this.empty().each(updateElement) : this[0] ? this[0][method] : ""
                    },
                    text: function(opt_text) {
                        return this.html(opt_text, true)
                    },
                    append: function(node) {
                        var that = this;
                        return this.each(function(el, i) {
                            each(normalize(node, that, i), function(i) {
                                el.appendChild(i)
                            })
                        })
                    },
                    prepend: function(node) {
                        var that = this;
                        return this.each(function(el, i) {
                            var first = el.firstChild;
                            each(normalize(node, that, i), function(i) {
                                el.insertBefore(i, first)
                            })
                        })
                    },
                    appendTo: function(target, opt_host) {
                        return insert.call(this, target, opt_host, function(t, el) {
                            t.appendChild(el)
                        })
                    },
                    prependTo: function(target, opt_host) {
                        return insert.call(this, target, opt_host, function(t, el) {
                            t.insertBefore(el, t.firstChild)
                        }, 1)
                    },
                    before: function(node) {
                        var that = this;
                        return this.each(function(el, i) {
                            each(normalize(node, that, i), function(i) {
                                el[parentNode].insertBefore(i, el)
                            })
                        })
                    },
                    after: function(node) {
                        var that = this;
                        return this.each(function(el, i) {
                            each(normalize(node, that, i), function(i) {
                                el[parentNode].insertBefore(i, el.nextSibling)
                            }, null, 1)
                        })
                    },
                    insertBefore: function(target, opt_host) {
                        return insert.call(this, target, opt_host, function(t, el) {
                            t[parentNode].insertBefore(el, t)
                        })
                    },
                    insertAfter: function(target, opt_host) {
                        return insert.call(this, target, opt_host, function(t, el) {
                            var sibling = t.nextSibling;
                            sibling ? t[parentNode].insertBefore(el, sibling) : t[parentNode].appendChild(el)
                        }, 1)
                    },
                    replaceWith: function(node) {
                        bonzo(normalize(node)).insertAfter(this);
                        return this.remove()
                    },
                    clone: function(opt_host) {
                        var ret = [],
                            l, i;
                        for (i = 0, l = this.length; i < l; i++) ret[i] = cloneNode(opt_host || this, this[i]);
                        return bonzo(ret)
                    },
                    addClass: function(c) {
                        c = toString.call(c).split(whitespaceRegex);
                        return this.each(function(el) {
                            each(c, function(c) {
                                if (c && !hasClass(el, setter(el, c))) addClass(el, setter(el, c))
                            })
                        })
                    },
                    removeClass: function(c) {
                        c = toString.call(c).split(whitespaceRegex);
                        return this.each(function(el) {
                            each(c, function(c) {
                                if (c && hasClass(el, setter(el, c))) removeClass(el, setter(el, c))
                            })
                        })
                    },
                    hasClass: function(c) {
                        c = toString.call(c).split(whitespaceRegex);
                        return some(this, function(el) {
                            return some(c, function(c) {
                                return c && hasClass(el, c)
                            })
                        })
                    },
                    toggleClass: function(c, opt_condition) {
                        c = toString.call(c).split(whitespaceRegex);
                        return this.each(function(el) {
                            each(c, function(c) {
                                if (c) {
                                    typeof opt_condition !== "undefined" ? opt_condition ? !hasClass(el, c) && addClass(el, c) : removeClass(el, c) : hasClass(el, c) ? removeClass(el, c) : addClass(el, c)
                                }
                            })
                        })
                    },
                    show: function(opt_type) {
                        opt_type = typeof opt_type == "string" ? opt_type : "";
                        return this.each(function(el) {
                            el.style.display = opt_type
                        })
                    },
                    hide: function() {
                        return this.each(function(el) {
                            el.style.display = "none"
                        })
                    },
                    toggle: function(opt_callback, opt_type) {
                        opt_type = typeof opt_type == "string" ? opt_type : "";
                        typeof opt_callback != "function" && (opt_callback = null);
                        return this.each(function(el) {
                            el.style.display = el.offsetWidth || el.offsetHeight ? "none" : opt_type;
                            opt_callback && opt_callback.call(el)
                        })
                    },
                    first: function() {
                        return bonzo(this.length ? this[0] : [])
                    },
                    last: function() {
                        return bonzo(this.length ? this[this.length - 1] : [])
                    },
                    next: function() {
                        return this.related("nextSibling")
                    },
                    previous: function() {
                        return this.related("previousSibling")
                    },
                    parent: function() {
                        return this.related(parentNode)
                    },
                    related: function(method) {
                        return bonzo(this.map(function(el) {
                            el = el[method];
                            while (el && el.nodeType !== 1) {
                                el = el[method]
                            }
                            return el || 0
                        }, function(el) {
                            return el
                        }))
                    },
                    focus: function() {
                        this.length && this[0].focus();
                        return this
                    },
                    blur: function() {
                        this.length && this[0].blur();
                        return this
                    },
                    css: function(o, opt_v) {
                        var p, iter = o;
                        if (opt_v === undefined && typeof o == "string") {
                            opt_v = this[0];
                            if (!opt_v) return null;
                            if (opt_v === doc || opt_v === win) {
                                p = opt_v === doc ? bonzo.doc() : bonzo.viewport();
                                return o == "width" ? p.width : o == "height" ? p.height : ""
                            }
                            return (o = styleProperty(o)) ? getStyle(opt_v, o) : null
                        }
                        if (typeof o == "string") {
                            iter = {};
                            iter[o] = opt_v
                        }
                        if (!features.opasity && "opacity" in iter) {
                            iter.filter = iter.opacity != null && iter.opacity !== "" ? "alpha(opacity=" + iter.opacity * 100 + ")" : "";
                            iter.zoom = o.zoom || 1;
                            delete iter.opacity
                        }

                        function fn(el, p, v) {
                            for (var k in iter) {
                                if (iter.hasOwnProperty(k)) {
                                    v = iter[k];
                                    (p = styleProperty(k)) && digit.test(v) && !(p in unitless) && (v += px);
                                    try {
                                        el.style[p] = setter(el, v)
                                    } catch (e) {}
                                }
                            }
                        }
                        return this.each(fn)
                    },
                    offset: function(opt_x, opt_y) {
                        if (opt_x && typeof opt_x == "object" && (typeof opt_x.top == "number" || typeof opt_x.left == "number")) {
                            return this.each(function(el) {
                                xy(el, opt_x.left, opt_x.top)
                            })
                        } else if (typeof opt_x == "number" || typeof opt_y == "number") {
                            return this.each(function(el) {
                                xy(el, opt_x, opt_y)
                            })
                        }
                        if (!this[0]) return {
                            top: 0,
                            left: 0,
                            height: 0,
                            width: 0
                        };
                        var el = this[0],
                            de = el.ownerDocument.documentElement,
                            bcr = el.getBoundingClientRect(),
                            scroll = getWindowScroll(),
                            width = el.offsetWidth,
                            height = el.offsetHeight,
                            top = bcr.top + scroll.y - Math.max(0, de && de.clientTop, doc.body.clientTop),
                            left = bcr.left + scroll.x - Math.max(0, de && de.clientLeft, doc.body.clientLeft);
                        return {
                            top: top,
                            left: left,
                            height: height,
                            width: width
                        }
                    },
                    dim: function() {
                        if (!this.length) return {
                            height: 0,
                            width: 0
                        };
                        var el = this[0],
                            de = el.nodeType == 9 && el.documentElement,
                            orig = !de && !! el.style && !el.offsetWidth && !el.offsetHeight ? function(t) {
                                var s = {
                                    position: el.style.position || "",
                                    visibility: el.style.visibility || "",
                                    display: el.style.display || ""
                                };
                                t.first().css({
                                    position: "absolute",
                                    visibility: "hidden",
                                    display: "block"
                                });
                                return s
                            }(this) : null,
                            width = de ? Math.max(el.body.scrollWidth, el.body.offsetWidth, de.scrollWidth, de.offsetWidth, de.clientWidth) : el.offsetWidth,
                            height = de ? Math.max(el.body.scrollHeight, el.body.offsetHeight, de.scrollHeight, de.offsetHeight, de.clientHeight) : el.offsetHeight;
                        orig && this.first().css(orig);
                        return {
                            height: height,
                            width: width
                        }
                    },
                    attr: function(k, opt_v) {
                        var el = this[0],
                            n;
                        if (typeof k != "string" && !(k instanceof String)) {
                            for (n in k) {
                                k.hasOwnProperty(n) && this.attr(n, k[n])
                            }
                            return this
                        }
                        return typeof opt_v == "undefined" ? !el ? null : specialAttributes.test(k) ? stateAttributes.test(k) && typeof el[k] == "string" ? true : el[k] : (k == "href" || k == "src") && features.hrefExtended ? el[getAttribute](k, 2) : el[getAttribute](k) : this.each(function(el) {
                            specialAttributes.test(k) ? el[k] = setter(el, opt_v) : el[setAttribute](k, setter(el, opt_v))
                        })
                    },
                    removeAttr: function(k) {
                        return this.each(function(el) {
                            stateAttributes.test(k) ? el[k] = false : el.removeAttribute(k)
                        })
                    },
                    val: function(s) {
                        return typeof s == "string" || typeof s == "number" ? this.attr("value", s) : this.length ? this[0].value : null
                    },
                    data: function(opt_k, opt_v) {
                        var el = this[0],
                            o, m;
                        if (typeof opt_v === "undefined") {
                            if (!el) return null;
                            o = data(el);
                            if (typeof opt_k === "undefined") {
                                each(el.attributes, function(a) {
                                    (m = ("" + a.name).match(dattr)) && (o[camelize(m[1])] = dataValue(a.value))
                                });
                                return o
                            } else {
                                if (typeof o[opt_k] === "undefined") o[opt_k] = dataValue(this.attr("data-" + decamelize(opt_k)));
                                return o[opt_k]
                            }
                        } else {
                            return this.each(function(el) {
                                data(el)[opt_k] = opt_v
                            })
                        }
                    },
                    remove: function() {
                        this.deepEach(clearData);
                        return this.detach()
                    },
                    empty: function() {
                        return this.each(function(el) {
                            deepEach(el.childNodes, clearData);
                            while (el.firstChild) {
                                el.removeChild(el.firstChild)
                            }
                        })
                    },
                    detach: function() {
                        return this.each(function(el) {
                            el[parentNode] && el[parentNode].removeChild(el)
                        })
                    },
                    scrollTop: function(y) {
                        return scroll.call(this, null, y, "y")
                    },
                    scrollLeft: function(x) {
                        return scroll.call(this, x, null, "x")
                    }
                };

                function cloneNode(host, el) {
                    var c = el.cloneNode(true),
                        cloneElems, elElems, i;
                    if (host.$ && typeof host.cloneEvents == "function") {
                        host.$(c).cloneEvents(el);
                        cloneElems = host.$(c).find("*");
                        elElems = host.$(el).find("*");
                        for (i = 0; i < elElems.length; i++) host.$(cloneElems[i]).cloneEvents(elElems[i])
                    }
                    return c
                }

                function isBody(element) {
                    return element === win || /^(?:body|html)$/i.test(element.tagName)
                }

                function getWindowScroll() {
                    return {
                        x: win.pageXOffset || html.scrollLeft,
                        y: win.pageYOffset || html.scrollTop
                    }
                }

                function createScriptFromHtml(html) {
                    var scriptEl = document.createElement("script"),
                        matches = html.match(simpleScriptTagRe);
                    scriptEl.src = matches[1];
                    return scriptEl
                }

                function bonzo(els) {
                    return new Bonzo(els)
                }
                bonzo.setQueryEngine = function(q) {
                    query = q;
                    delete bonzo.setQueryEngine
                };
                bonzo.aug = function(o, target) {
                    for (var k in o) {
                        o.hasOwnProperty(k) && ((target || Bonzo.prototype)[k] = o[k])
                    }
                };
                bonzo.create = function(node) {
                    return typeof node == "string" && node !== "" ? function() {
                        if (simpleScriptTagRe.test(node)) return [createScriptFromHtml(node)];
                        var tag = node.match(/^\s*<([^\s>]+)/),
                            el = doc.createElement("div"),
                            els = [],
                            p = tag ? tagMap[tag[1].toLowerCase()] : null,
                            dep = p ? p[2] + 1 : 1,
                            ns = p && p[3],
                            pn = parentNode,
                            tb = features.autoTbody && p && p[0] == "<table>" && !/<tbody/i.test(node);
                        el.innerHTML = p ? p[0] + node + p[1] : node;
                        while (dep--) el = el.firstChild;
                        if (ns && el && el.nodeType !== 1) el = el.nextSibling;
                        do {
                            if ((!tag || el.nodeType == 1) && (!tb || el.tagName && el.tagName != "TBODY")) {
                                els.push(el)
                            }
                        } while (el = el.nextSibling);
                        each(els, function(el) {
                            el[pn] && el[pn].removeChild(el)
                        });
                        return els
                    }() : isNode(node) ? [node.cloneNode(true)] : []
                };
                bonzo.doc = function() {
                    var vp = bonzo.viewport();
                    return {
                        width: Math.max(doc.body.scrollWidth, html.scrollWidth, vp.width),
                        height: Math.max(doc.body.scrollHeight, html.scrollHeight, vp.height)
                    }
                };
                bonzo.firstChild = function(el) {
                    for (var c = el.childNodes, i = 0, j = c && c.length || 0, e; i < j; i++) {
                        if (c[i].nodeType === 1) e = c[j = i]
                    }
                    return e
                };
                bonzo.viewport = function() {
                    return {
                        width: ie ? html.clientWidth : win.innerWidth,
                        height: ie ? html.clientHeight : win.innerHeight
                    }
                };
                bonzo.isAncestor = "compareDocumentPosition" in html ? function(container, element) {
                    return (container.compareDocumentPosition(element) & 16) == 16
                } : "contains" in html ? function(container, element) {
                    return container !== element && container.contains(element)
                } : function(container, element) {
                    while (element = element[parentNode]) {
                        if (element === container) {
                            return true
                        }
                    }
                    return false
                };
                return bonzo
            })
        }, {}
    ],
    36: [
        function(require, module, exports) {
            var toString = Object.prototype.toString;
            var hasOwnProperty = Object.prototype.hasOwnProperty;

            function isArray(xs) {
                return toString.call(xs) === "[object Array]"
            }
            exports.isArray = typeof Array.isArray === "function" ? Array.isArray : isArray;
            exports.indexOf = function indexOf(xs, x) {
                if (xs.indexOf) return xs.indexOf(x);
                for (var i = 0; i < xs.length; i++) {
                    if (x === xs[i]) return i
                }
                return -1
            };
            exports.filter = function filter(xs, fn) {
                if (xs.filter) return xs.filter(fn);
                var res = [];
                for (var i = 0; i < xs.length; i++) {
                    if (fn(xs[i], i, xs)) res.push(xs[i])
                }
                return res
            };
            exports.forEach = function forEach(xs, fn, self) {
                if (xs.forEach) return xs.forEach(fn, self);
                for (var i = 0; i < xs.length; i++) {
                    fn.call(self, xs[i], i, xs)
                }
            };
            exports.map = function map(xs, fn) {
                if (xs.map) return xs.map(fn);
                var out = new Array(xs.length);
                for (var i = 0; i < xs.length; i++) {
                    out[i] = fn(xs[i], i, xs)
                }
                return out
            };
            exports.reduce = function reduce(array, callback, opt_initialValue) {
                if (array.reduce) return array.reduce(callback, opt_initialValue);
                var value, isValueSet = false;
                if (2 < arguments.length) {
                    value = opt_initialValue;
                    isValueSet = true
                }
                for (var i = 0, l = array.length; l > i; ++i) {
                    if (array.hasOwnProperty(i)) {
                        if (isValueSet) {
                            value = callback(value, array[i], i, array)
                        } else {
                            value = array[i];
                            isValueSet = true
                        }
                    }
                }
                return value
            };
            if ("ab".substr(-1) !== "b") {
                exports.substr = function(str, start, length) {
                    if (start < 0) start = str.length + start;
                    return str.substr(start, length)
                }
            } else {
                exports.substr = function(str, start, length) {
                    return str.substr(start, length)
                }
            }
            exports.trim = function(str) {
                if (str.trim) return str.trim();
                return str.replace(/^\s+|\s+$/g, "")
            };
            exports.bind = function() {
                var args = Array.prototype.slice.call(arguments);
                var fn = args.shift();
                if (fn.bind) return fn.bind.apply(fn, args);
                var self = args.shift();
                return function() {
                    fn.apply(self, args.concat([Array.prototype.slice.call(arguments)]))
                }
            };

            function create(prototype, properties) {
                var object;
                if (prototype === null) {
                    object = {
                        __proto__: null
                    }
                } else {
                    if (typeof prototype !== "object") {
                        throw new TypeError("typeof prototype[" + typeof prototype + "] != 'object'")
                    }
                    var Type = function() {};
                    Type.prototype = prototype;
                    object = new Type;
                    object.__proto__ = prototype
                } if (typeof properties !== "undefined" && Object.defineProperties) {
                    Object.defineProperties(object, properties)
                }
                return object
            }
            exports.create = typeof Object.create === "function" ? Object.create : create;

            function notObject(object) {
                return typeof object != "object" && typeof object != "function" || object === null
            }

            function keysShim(object) {
                if (notObject(object)) {
                    throw new TypeError("Object.keys called on a non-object")
                }
                var result = [];
                for (var name in object) {
                    if (hasOwnProperty.call(object, name)) {
                        result.push(name)
                    }
                }
                return result
            }

            function propertyShim(object) {
                if (notObject(object)) {
                    throw new TypeError("Object.getOwnPropertyNames called on a non-object")
                }
                var result = keysShim(object);
                if (exports.isArray(object) && exports.indexOf(object, "length") === -1) {
                    result.push("length")
                }
                return result
            }
            var keys = typeof Object.keys === "function" ? Object.keys : keysShim;
            var getOwnPropertyNames = typeof Object.getOwnPropertyNames === "function" ? Object.getOwnPropertyNames : propertyShim;
            if ((new Error).hasOwnProperty("description")) {
                var ERROR_PROPERTY_FILTER = function(obj, array) {
                    if (toString.call(obj) === "[object Error]") {
                        array = exports.filter(array, function(name) {
                            return name !== "description" && name !== "number" && name !== "message"
                        })
                    }
                    return array
                };
                exports.keys = function(object) {
                    return ERROR_PROPERTY_FILTER(object, keys(object))
                };
                exports.getOwnPropertyNames = function(object) {
                    return ERROR_PROPERTY_FILTER(object, getOwnPropertyNames(object))
                }
            } else {
                exports.keys = keys;
                exports.getOwnPropertyNames = getOwnPropertyNames
            }

            function valueObject(value, key) {
                return {
                    value: value[key]
                }
            }
            if (typeof Object.getOwnPropertyDescriptor === "function") {
                try {
                    Object.getOwnPropertyDescriptor({
                        a: 1
                    }, "a");
                    exports.getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
                } catch (e) {
                    exports.getOwnPropertyDescriptor = function(value, key) {
                        try {
                            return Object.getOwnPropertyDescriptor(value, key)
                        } catch (e) {
                            return valueObject(value, key)
                        }
                    }
                }
            } else {
                exports.getOwnPropertyDescriptor = valueObject
            }
        }, {}
    ],
    37: [
        function(require, module, exports) {
            var util = require("util");

            function EventEmitter() {
                this._events = this._events || {};
                this._maxListeners = this._maxListeners || undefined
            }
            module.exports = EventEmitter;
            EventEmitter.EventEmitter = EventEmitter;
            EventEmitter.prototype._events = undefined;
            EventEmitter.prototype._maxListeners = undefined;
            EventEmitter.defaultMaxListeners = 10;
            EventEmitter.prototype.setMaxListeners = function(n) {
                if (!util.isNumber(n) || n < 0) throw TypeError("n must be a positive number");
                this._maxListeners = n;
                return this
            };
            EventEmitter.prototype.emit = function(type) {
                var er, handler, len, args, i, listeners;
                if (!this._events) this._events = {};
                if (type === "error") {
                    if (!this._events.error || util.isObject(this._events.error) && !this._events.error.length) {
                        er = arguments[1];
                        if (er instanceof Error) {
                            throw er
                        } else {
                            throw TypeError('Uncaught, unspecified "error" event.')
                        }
                        return false
                    }
                }
                handler = this._events[type];
                if (util.isUndefined(handler)) return false;
                if (util.isFunction(handler)) {
                    switch (arguments.length) {
                        case 1:
                            handler.call(this);
                            break;
                        case 2:
                            handler.call(this, arguments[1]);
                            break;
                        case 3:
                            handler.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            len = arguments.length;
                            args = new Array(len - 1);
                            for (i = 1; i < len; i++) args[i - 1] = arguments[i];
                            handler.apply(this, args)
                    }
                } else if (util.isObject(handler)) {
                    len = arguments.length;
                    args = new Array(len - 1);
                    for (i = 1; i < len; i++) args[i - 1] = arguments[i];
                    listeners = handler.slice();
                    len = listeners.length;
                    for (i = 0; i < len; i++) listeners[i].apply(this, args)
                }
                return true
            };
            EventEmitter.prototype.addListener = function(type, listener) {
                var m;
                if (!util.isFunction(listener)) throw TypeError("listener must be a function");
                if (!this._events) this._events = {};
                if (this._events.newListener) this.emit("newListener", type, util.isFunction(listener.listener) ? listener.listener : listener);
                if (!this._events[type]) this._events[type] = listener;
                else if (util.isObject(this._events[type])) this._events[type].push(listener);
                else this._events[type] = [this._events[type], listener]; if (util.isObject(this._events[type]) && !this._events[type].warned) {
                    var m;
                    if (!util.isUndefined(this._maxListeners)) {
                        m = this._maxListeners
                    } else {
                        m = EventEmitter.defaultMaxListeners
                    } if (m && m > 0 && this._events[type].length > m) {
                        this._events[type].warned = true;
                        console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
                        console.trace()
                    }
                }
                return this
            };
            EventEmitter.prototype.on = EventEmitter.prototype.addListener;
            EventEmitter.prototype.once = function(type, listener) {
                if (!util.isFunction(listener)) throw TypeError("listener must be a function");

                function g() {
                    this.removeListener(type, g);
                    listener.apply(this, arguments)
                }
                g.listener = listener;
                this.on(type, g);
                return this
            };
            EventEmitter.prototype.removeListener = function(type, listener) {
                var list, position, length, i;
                if (!util.isFunction(listener)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[type]) return this;
                list = this._events[type];
                length = list.length;
                position = -1;
                if (list === listener || util.isFunction(list.listener) && list.listener === listener) {
                    delete this._events[type];
                    if (this._events.removeListener) this.emit("removeListener", type, listener)
                } else if (util.isObject(list)) {
                    for (i = length; i-- > 0;) {
                        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                            position = i;
                            break
                        }
                    }
                    if (position < 0) return this;
                    if (list.length === 1) {
                        list.length = 0;
                        delete this._events[type]
                    } else {
                        list.splice(position, 1)
                    } if (this._events.removeListener) this.emit("removeListener", type, listener)
                }
                return this
            };
            EventEmitter.prototype.removeAllListeners = function(type) {
                var key, listeners;
                if (!this._events) return this;
                if (!this._events.removeListener) {
                    if (arguments.length === 0) this._events = {};
                    else if (this._events[type]) delete this._events[type];
                    return this
                }
                if (arguments.length === 0) {
                    for (key in this._events) {
                        if (key === "removeListener") continue;
                        this.removeAllListeners(key)
                    }
                    this.removeAllListeners("removeListener");
                    this._events = {};
                    return this
                }
                listeners = this._events[type];
                if (util.isFunction(listeners)) {
                    this.removeListener(type, listeners)
                } else {
                    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1])
                }
                delete this._events[type];
                return this
            };
            EventEmitter.prototype.listeners = function(type) {
                var ret;
                if (!this._events || !this._events[type]) ret = [];
                else if (util.isFunction(this._events[type])) ret = [this._events[type]];
                else ret = this._events[type].slice();
                return ret
            };
            EventEmitter.listenerCount = function(emitter, type) {
                var ret;
                if (!emitter._events || !emitter._events[type]) ret = 0;
                else if (util.isFunction(emitter._events[type])) ret = 1;
                else ret = emitter._events[type].length;
                return ret
            }
        }, {
            util: 39
        }
    ],
    38: [
        function(require, module, exports) {}, {}
    ],
    39: [
        function(require, module, exports) {
            var shims = require("_shims");
            var formatRegExp = /%[sdj%]/g;
            exports.format = function(f) {
                if (!isString(f)) {
                    var objects = [];
                    for (var i = 0; i < arguments.length; i++) {
                        objects.push(inspect(arguments[i]))
                    }
                    return objects.join(" ")
                }
                var i = 1;
                var args = arguments;
                var len = args.length;
                var str = String(f).replace(formatRegExp, function(x) {
                    if (x === "%%") return "%";
                    if (i >= len) return x;
                    switch (x) {
                        case "%s":
                            return String(args[i++]);
                        case "%d":
                            return Number(args[i++]);
                        case "%j":
                            try {
                                return JSON.stringify(args[i++])
                            } catch (_) {
                                return "[Circular]"
                            }
                        default:
                            return x
                    }
                });
                for (var x = args[i]; i < len; x = args[++i]) {
                    if (isNull(x) || !isObject(x)) {
                        str += " " + x
                    } else {
                        str += " " + inspect(x)
                    }
                }
                return str
            };

            function inspect(obj, opts) {
                var ctx = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) ctx.depth = arguments[2];
                if (arguments.length >= 4) ctx.colors = arguments[3];
                if (isBoolean(opts)) {
                    ctx.showHidden = opts
                } else if (opts) {
                    exports._extend(ctx, opts)
                }
                if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                if (isUndefined(ctx.depth)) ctx.depth = 2;
                if (isUndefined(ctx.colors)) ctx.colors = false;
                if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                if (ctx.colors) ctx.stylize = stylizeWithColor;
                return formatValue(ctx, obj, ctx.depth)
            }
            exports.inspect = inspect;
            inspect.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                "boolean": "yellow",
                undefined: "grey",
                "null": "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };

            function stylizeWithColor(str, styleType) {
                var style = inspect.styles[styleType];
                if (style) {
                    return "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m"
                } else {
                    return str
                }
            }

            function stylizeNoColor(str, styleType) {
                return str
            }

            function arrayToHash(array) {
                var hash = {};
                shims.forEach(array, function(val, idx) {
                    hash[val] = true
                });
                return hash
            }

            function formatValue(ctx, value, recurseTimes) {
                if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
                    var ret = value.inspect(recurseTimes);
                    if (!isString(ret)) {
                        ret = formatValue(ctx, ret, recurseTimes)
                    }
                    return ret
                }
                var primitive = formatPrimitive(ctx, value);
                if (primitive) {
                    return primitive
                }
                var keys = shims.keys(value);
                var visibleKeys = arrayToHash(keys);
                if (ctx.showHidden) {
                    keys = shims.getOwnPropertyNames(value)
                }
                if (keys.length === 0) {
                    if (isFunction(value)) {
                        var name = value.name ? ": " + value.name : "";
                        return ctx.stylize("[Function" + name + "]", "special")
                    }
                    if (isRegExp(value)) {
                        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp")
                    }
                    if (isDate(value)) {
                        return ctx.stylize(Date.prototype.toString.call(value), "date")
                    }
                    if (isError(value)) {
                        return formatError(value)
                    }
                }
                var base = "",
                    array = false,
                    braces = ["{", "}"];
                if (isArray(value)) {
                    array = true;
                    braces = ["[", "]"]
                }
                if (isFunction(value)) {
                    var n = value.name ? ": " + value.name : "";
                    base = " [Function" + n + "]"
                }
                if (isRegExp(value)) {
                    base = " " + RegExp.prototype.toString.call(value)
                }
                if (isDate(value)) {
                    base = " " + Date.prototype.toUTCString.call(value)
                }
                if (isError(value)) {
                    base = " " + formatError(value)
                }
                if (keys.length === 0 && (!array || value.length == 0)) {
                    return braces[0] + base + braces[1]
                }
                if (recurseTimes < 0) {
                    if (isRegExp(value)) {
                        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp")
                    } else {
                        return ctx.stylize("[Object]", "special")
                    }
                }
                ctx.seen.push(value);
                var output;
                if (array) {
                    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys)
                } else {
                    output = keys.map(function(key) {
                        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array)
                    })
                }
                ctx.seen.pop();
                return reduceToSingleString(output, base, braces)
            }

            function formatPrimitive(ctx, value) {
                if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
                if (isString(value)) {
                    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return ctx.stylize(simple, "string")
                }
                if (isNumber(value)) return ctx.stylize("" + value, "number");
                if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
                if (isNull(value)) return ctx.stylize("null", "null")
            }

            function formatError(value) {
                return "[" + Error.prototype.toString.call(value) + "]"
            }

            function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                var output = [];
                for (var i = 0, l = value.length; i < l; ++i) {
                    if (hasOwnProperty(value, String(i))) {
                        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true))
                    } else {
                        output.push("")
                    }
                }
                shims.forEach(keys, function(key) {
                    if (!key.match(/^\d+$/)) {
                        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true))
                    }
                });
                return output
            }

            function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                var name, str, desc;
                desc = shims.getOwnPropertyDescriptor(value, key) || {
                    value: value[key]
                };
                if (desc.get) {
                    if (desc.set) {
                        str = ctx.stylize("[Getter/Setter]", "special")
                    } else {
                        str = ctx.stylize("[Getter]", "special")
                    }
                } else {
                    if (desc.set) {
                        str = ctx.stylize("[Setter]", "special")
                    }
                } if (!hasOwnProperty(visibleKeys, key)) {
                    name = "[" + key + "]"
                }
                if (!str) {
                    if (shims.indexOf(ctx.seen, desc.value) < 0) {
                        if (isNull(recurseTimes)) {
                            str = formatValue(ctx, desc.value, null)
                        } else {
                            str = formatValue(ctx, desc.value, recurseTimes - 1)
                        } if (str.indexOf("\n") > -1) {
                            if (array) {
                                str = str.split("\n").map(function(line) {
                                    return "  " + line
                                }).join("\n").substr(2)
                            } else {
                                str = "\n" + str.split("\n").map(function(line) {
                                    return "   " + line
                                }).join("\n")
                            }
                        }
                    } else {
                        str = ctx.stylize("[Circular]", "special")
                    }
                }
                if (isUndefined(name)) {
                    if (array && key.match(/^\d+$/)) {
                        return str
                    }
                    name = JSON.stringify("" + key);
                    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        name = name.substr(1, name.length - 2);
                        name = ctx.stylize(name, "name")
                    } else {
                        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        name = ctx.stylize(name, "string")
                    }
                }
                return name + ": " + str
            }

            function reduceToSingleString(output, base, braces) {
                var numLinesEst = 0;
                var length = shims.reduce(output, function(prev, cur) {
                    numLinesEst++;
                    if (cur.indexOf("\n") >= 0) numLinesEst++;
                    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0);
                if (length > 60) {
                    return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1]
                }
                return braces[0] + base + " " + output.join(", ") + " " + braces[1]
            }

            function isArray(ar) {
                return shims.isArray(ar)
            }
            exports.isArray = isArray;

            function isBoolean(arg) {
                return typeof arg === "boolean"
            }
            exports.isBoolean = isBoolean;

            function isNull(arg) {
                return arg === null
            }
            exports.isNull = isNull;

            function isNullOrUndefined(arg) {
                return arg == null
            }
            exports.isNullOrUndefined = isNullOrUndefined;

            function isNumber(arg) {
                return typeof arg === "number"
            }
            exports.isNumber = isNumber;

            function isString(arg) {
                return typeof arg === "string"
            }
            exports.isString = isString;

            function isSymbol(arg) {
                return typeof arg === "symbol"
            }
            exports.isSymbol = isSymbol;

            function isUndefined(arg) {
                return arg === void 0
            }
            exports.isUndefined = isUndefined;

            function isRegExp(re) {
                return isObject(re) && objectToString(re) === "[object RegExp]"
            }
            exports.isRegExp = isRegExp;

            function isObject(arg) {
                return typeof arg === "object" && arg
            }
            exports.isObject = isObject;

            function isDate(d) {
                return isObject(d) && objectToString(d) === "[object Date]"
            }
            exports.isDate = isDate;

            function isError(e) {
                return isObject(e) && objectToString(e) === "[object Error]"
            }
            exports.isError = isError;

            function isFunction(arg) {
                return typeof arg === "function"
            }
            exports.isFunction = isFunction;

            function isPrimitive(arg) {
                return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined"
            }
            exports.isPrimitive = isPrimitive;

            function isBuffer(arg) {
                return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.binarySlice === "function"
            }
            exports.isBuffer = isBuffer;

            function objectToString(o) {
                return Object.prototype.toString.call(o)
            }

            function pad(n) {
                return n < 10 ? "0" + n.toString(10) : n.toString(10)
            }
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function timestamp() {
                var d = new Date;
                var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(":");
                return [d.getDate(), months[d.getMonth()], time].join(" ")
            }
            exports.log = function() {
                console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments))
            };
            exports.inherits = function(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = shims.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                })
            };
            exports._extend = function(origin, add) {
                if (!add || !isObject(add)) return origin;
                var keys = shims.keys(add);
                var i = keys.length;
                while (i--) {
                    origin[keys[i]] = add[keys[i]]
                }
                return origin
            };

            function hasOwnProperty(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop)
            }
        }, {
            _shims: 36
        }
    ],
    40: [
        function(require, module, exports) {
            ! function(name, definition) {
                if (typeof module != "undefined") module.exports = definition();
                else if (typeof define == "function" && typeof define.amd == "object") define(definition);
                else this[name] = definition()
            }("domready", function(ready) {
                var fns = [],
                    fn, f = false,
                    doc = document,
                    testEl = doc.documentElement,
                    hack = testEl.doScroll,
                    domContentLoaded = "DOMContentLoaded",
                    addEventListener = "addEventListener",
                    onreadystatechange = "onreadystatechange",
                    readyState = "readyState",
                    loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/,
                    loaded = loadedRgx.test(doc[readyState]);

                function flush(f) {
                    loaded = 1;
                    while (f = fns.shift()) f()
                }
                doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function() {
                    doc.removeEventListener(domContentLoaded, fn, f);
                    flush()
                }, f);
                hack && doc.attachEvent(onreadystatechange, fn = function() {
                    if (/^c/.test(doc[readyState])) {
                        doc.detachEvent(onreadystatechange, fn);
                        flush()
                    }
                });
                return ready = hack ? function(fn) {
                    self != top ? loaded ? fn() : fns.push(fn) : function() {
                        try {
                            testEl.doScroll("left")
                        } catch (e) {
                            return setTimeout(function() {
                                ready(fn)
                            }, 50)
                        }
                        fn()
                    }()
                } : function(fn) {
                    loaded ? fn() : fns.push(fn)
                }
            })
        }, {}
    ],
    41: [
        function(require, module, exports) {
            var property;
            var types = ["transitionDuration", "MozTransitionDuration", "webkitTransitionDuration", "msTransitionDuration", "KhtmlTransitionDuration", "OTransitionDuration"];
            while (types.length) {
                var type = types.shift();
                if (type in document.body.style) {
                    property = type
                }
            }

            function hasTransitions(el) {
                if (!property) {
                    return false
                }
                if (!el) {
                    return property != null
                }
                var duration = getComputedStyle(el)[property];
                return duration !== "" && parseFloat(duration) !== 0
            }
            module.exports = hasTransitions
        }, {}
    ],
    42: [
        function(require, module, exports) {
            (function(name, context, definition) {
                if (typeof module != "undefined" && module.exports) module.exports = definition();
                else if (typeof define == "function" && define.amd) define(definition);
                else context[name] = definition()
            })("qwery", this, function() {
                var doc = document,
                    html = doc.documentElement,
                    byClass = "getElementsByClassName",
                    byTag = "getElementsByTagName",
                    qSA = "querySelectorAll",
                    useNativeQSA = "useNativeQSA",
                    tagName = "tagName",
                    nodeType = "nodeType",
                    select, id = /#([\w\-]+)/,
                    clas = /\.[\w\-]+/g,
                    idOnly = /^#([\w\-]+)$/,
                    classOnly = /^\.([\w\-]+)$/,
                    tagOnly = /^([\w\-]+)$/,
                    tagAndOrClass = /^([\w]+)?\.([\w\-]+)$/,
                    splittable = /(^|,)\s*[>~+]/,
                    normalizr = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
                    splitters = /[\s\>\+\~]/,
                    splittersMore = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
                    specialChars = /([.*+?\^=!:${}()|\[\]\/\\])/g,
                    simple = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
                    attr = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
                    pseudo = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
                    easy = new RegExp(idOnly.source + "|" + tagOnly.source + "|" + classOnly.source),
                    dividers = new RegExp("(" + splitters.source + ")" + splittersMore.source, "g"),
                    tokenizr = new RegExp(splitters.source + splittersMore.source),
                    chunker = new RegExp(simple.source + "(" + attr.source + ")?" + "(" + pseudo.source + ")?");
                var walker = {
                    " ": function(node) {
                        return node && node !== html && node.parentNode
                    },
                    ">": function(node, contestant) {
                        return node && node.parentNode == contestant.parentNode && node.parentNode
                    },
                    "~": function(node) {
                        return node && node.previousSibling
                    },
                    "+": function(node, contestant, p1, p2) {
                        if (!node) return false;
                        return (p1 = previous(node)) && (p2 = previous(contestant)) && p1 == p2 && p1
                    }
                };

                function cache() {
                    this.c = {}
                }
                cache.prototype = {
                    g: function(k) {
                        return this.c[k] || undefined
                    },
                    s: function(k, v, r) {
                        v = r ? new RegExp(v) : v;
                        return this.c[k] = v
                    }
                };
                var classCache = new cache,
                    cleanCache = new cache,
                    attrCache = new cache,
                    tokenCache = new cache;

                function classRegex(c) {
                    return classCache.g(c) || classCache.s(c, "(^|\\s+)" + c + "(\\s+|$)", 1)
                }

                function each(a, fn) {
                    var i = 0,
                        l = a.length;
                    for (; i < l; i++) fn(a[i])
                }

                function flatten(ar) {
                    for (var r = [], i = 0, l = ar.length; i < l; ++i) arrayLike(ar[i]) ? r = r.concat(ar[i]) : r[r.length] = ar[i];
                    return r
                }

                function arrayify(ar) {
                    var i = 0,
                        l = ar.length,
                        r = [];
                    for (; i < l; i++) r[i] = ar[i];
                    return r
                }

                function previous(n) {
                    while (n = n.previousSibling)
                        if (n[nodeType] == 1) break;
                    return n
                }

                function q(query) {
                    return query.match(chunker)
                }

                function interpret(whole, tag, idsAndClasses, wholeAttribute, attribute, qualifier, value, wholePseudo, pseudo, wholePseudoVal, pseudoVal) {
                    var i, m, k, o, classes;
                    if (this[nodeType] !== 1) return false;
                    if (tag && tag !== "*" && this[tagName] && this[tagName].toLowerCase() !== tag) return false;
                    if (idsAndClasses && (m = idsAndClasses.match(id)) && m[1] !== this.id) return false;
                    if (idsAndClasses && (classes = idsAndClasses.match(clas))) {
                        for (i = classes.length; i--;)
                            if (!classRegex(classes[i].slice(1)).test(this.className)) return false
                    }
                    if (pseudo && qwery.pseudos[pseudo] && !qwery.pseudos[pseudo](this, pseudoVal)) return false;
                    if (wholeAttribute && !value) {
                        o = this.attributes;
                        for (k in o) {
                            if (Object.prototype.hasOwnProperty.call(o, k) && (o[k].name || k) == attribute) {
                                return this
                            }
                        }
                    }
                    if (wholeAttribute && !checkAttr(qualifier, getAttr(this, attribute) || "", value)) {
                        return false
                    }
                    return this
                }

                function clean(s) {
                    return cleanCache.g(s) || cleanCache.s(s, s.replace(specialChars, "\\$1"))
                }

                function checkAttr(qualify, actual, val) {
                    switch (qualify) {
                        case "=":
                            return actual == val;
                        case "^=":
                            return actual.match(attrCache.g("^=" + val) || attrCache.s("^=" + val, "^" + clean(val), 1));
                        case "$=":
                            return actual.match(attrCache.g("$=" + val) || attrCache.s("$=" + val, clean(val) + "$", 1));
                        case "*=":
                            return actual.match(attrCache.g(val) || attrCache.s(val, clean(val), 1));
                        case "~=":
                            return actual.match(attrCache.g("~=" + val) || attrCache.s("~=" + val, "(?:^|\\s+)" + clean(val) + "(?:\\s+|$)", 1));
                        case "|=":
                            return actual.match(attrCache.g("|=" + val) || attrCache.s("|=" + val, "^" + clean(val) + "(-|$)", 1))
                    }
                    return 0
                }

                function _qwery(selector, _root) {
                    var r = [],
                        ret = [],
                        i, l, m, token, tag, els, intr, item, root = _root,
                        tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr)),
                        dividedTokens = selector.match(dividers);
                    if (!tokens.length) return r;
                    token = (tokens = tokens.slice(0)).pop();
                    if (tokens.length && (m = tokens[tokens.length - 1].match(idOnly))) root = byId(_root, m[1]);
                    if (!root) return r;
                    intr = q(token);
                    els = root !== _root && root[nodeType] !== 9 && dividedTokens && /^[+~]$/.test(dividedTokens[dividedTokens.length - 1]) ? function(r) {
                        while (root = root.nextSibling) {
                            root[nodeType] == 1 && (intr[1] ? intr[1] == root[tagName].toLowerCase() : 1) && (r[r.length] = root)
                        }
                        return r
                    }([]) : root[byTag](intr[1] || "*");
                    for (i = 0, l = els.length; i < l; i++) {
                        if (item = interpret.apply(els[i], intr)) r[r.length] = item
                    }
                    if (!tokens.length) return r;
                    each(r, function(e) {
                        if (ancestorMatch(e, tokens, dividedTokens)) ret[ret.length] = e
                    });
                    return ret
                }

                function is(el, selector, root) {
                    if (isNode(selector)) return el == selector;
                    if (arrayLike(selector)) return !!~flatten(selector).indexOf(el);
                    var selectors = selector.split(","),
                        tokens, dividedTokens;
                    while (selector = selectors.pop()) {
                        tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr));
                        dividedTokens = selector.match(dividers);
                        tokens = tokens.slice(0);
                        if (interpret.apply(el, q(tokens.pop())) && (!tokens.length || ancestorMatch(el, tokens, dividedTokens, root))) {
                            return true
                        }
                    }
                    return false
                }

                function ancestorMatch(el, tokens, dividedTokens, root) {
                    var cand;

                    function crawl(e, i, p) {
                        while (p = walker[dividedTokens[i]](p, e)) {
                            if (isNode(p) && interpret.apply(p, q(tokens[i]))) {
                                if (i) {
                                    if (cand = crawl(p, i - 1, p)) return cand
                                } else return p
                            }
                        }
                    }
                    return (cand = crawl(el, tokens.length - 1, el)) && (!root || isAncestor(cand, root))
                }

                function isNode(el, t) {
                    return el && typeof el === "object" && (t = el[nodeType]) && (t == 1 || t == 9)
                }

                function uniq(ar) {
                    var a = [],
                        i, j;
                    o: for (i = 0; i < ar.length; ++i) {
                        for (j = 0; j < a.length; ++j)
                            if (a[j] == ar[i]) continue o;
                        a[a.length] = ar[i]
                    }
                    return a
                }

                function arrayLike(o) {
                    return typeof o === "object" && isFinite(o.length)
                }

                function normalizeRoot(root) {
                    if (!root) return doc;
                    if (typeof root == "string") return qwery(root)[0];
                    if (!root[nodeType] && arrayLike(root)) return root[0];
                    return root
                }

                function byId(root, id, el) {
                    return root[nodeType] === 9 ? root.getElementById(id) : root.ownerDocument && ((el = root.ownerDocument.getElementById(id)) && isAncestor(el, root) && el || !isAncestor(root, root.ownerDocument) && select('[id="' + id + '"]', root)[0])
                }

                function qwery(selector, _root) {
                    var m, el, root = normalizeRoot(_root);
                    if (!root || !selector) return [];
                    if (selector === window || isNode(selector)) {
                        return !_root || selector !== window && isNode(root) && isAncestor(selector, root) ? [selector] : []
                    }
                    if (selector && arrayLike(selector)) return flatten(selector);
                    if (m = selector.match(easy)) {
                        if (m[1]) return (el = byId(root, m[1])) ? [el] : [];
                        if (m[2]) return arrayify(root[byTag](m[2]));
                        if (hasByClass && m[3]) return arrayify(root[byClass](m[3]))
                    }
                    return select(selector, root)
                }

                function collectSelector(root, collector) {
                    return function(s) {
                        var oid, nid;
                        if (splittable.test(s)) {
                            if (root[nodeType] !== 9) {
                                if (!(nid = oid = root.getAttribute("id"))) root.setAttribute("id", nid = "__qwerymeupscotty");
                                s = '[id="' + nid + '"]' + s;
                                collector(root.parentNode || root, s, true);
                                oid || root.removeAttribute("id")
                            }
                            return
                        }
                        s.length && collector(root, s, false)
                    }
                }
                var isAncestor = "compareDocumentPosition" in html ? function(element, container) {
                        return (container.compareDocumentPosition(element) & 16) == 16
                    } : "contains" in html ? function(element, container) {
                        container = container[nodeType] === 9 || container == window ? html : container;
                        return container !== element && container.contains(element)
                    } : function(element, container) {
                        while (element = element.parentNode)
                            if (element === container) return 1;
                        return 0
                    }, getAttr = function() {
                        var e = doc.createElement("p");
                        return (e.innerHTML = '<a href="#x">x</a>') && e.firstChild.getAttribute("href") != "#x" ? function(e, a) {
                            return a === "class" ? e.className : a === "href" || a === "src" ? e.getAttribute(a, 2) : e.getAttribute(a)
                        } : function(e, a) {
                            return e.getAttribute(a)
                        }
                    }(),
                    hasByClass = !! doc[byClass],
                    hasQSA = doc.querySelector && doc[qSA],
                    selectQSA = function(selector, root) {
                        var result = [],
                            ss, e;
                        try {
                            if (root[nodeType] === 9 || !splittable.test(selector)) {
                                return arrayify(root[qSA](selector))
                            }
                            each(ss = selector.split(","), collectSelector(root, function(ctx, s) {
                                e = ctx[qSA](s);
                                if (e.length == 1) result[result.length] = e.item(0);
                                else if (e.length) result = result.concat(arrayify(e))
                            }));
                            return ss.length > 1 && result.length > 1 ? uniq(result) : result
                        } catch (ex) {}
                        return selectNonNative(selector, root)
                    }, selectNonNative = function(selector, root) {
                        var result = [],
                            items, m, i, l, r, ss;
                        selector = selector.replace(normalizr, "$1");
                        if (m = selector.match(tagAndOrClass)) {
                            r = classRegex(m[2]);
                            items = root[byTag](m[1] || "*");
                            for (i = 0, l = items.length; i < l; i++) {
                                if (r.test(items[i].className)) result[result.length] = items[i]
                            }
                            return result
                        }
                        each(ss = selector.split(","), collectSelector(root, function(ctx, s, rewrite) {
                            r = _qwery(s, ctx);
                            for (i = 0, l = r.length; i < l; i++) {
                                if (ctx[nodeType] === 9 || rewrite || isAncestor(r[i], root)) result[result.length] = r[i]
                            }
                        }));
                        return ss.length > 1 && result.length > 1 ? uniq(result) : result
                    }, configure = function(options) {
                        if (typeof options[useNativeQSA] !== "undefined") select = !options[useNativeQSA] ? selectNonNative : hasQSA ? selectQSA : selectNonNative
                    };
                configure({
                    useNativeQSA: true
                });
                qwery.configure = configure;
                qwery.uniq = uniq;
                qwery.is = is;
                qwery.pseudos = {};
                return qwery
            })
        }, {}
    ],
    43: [
        function(require, module, exports) {
            (function() {
                var root = this;
                var previousUnderscore = root._;
                var breaker = {};
                var ArrayProto = Array.prototype,
                    ObjProto = Object.prototype,
                    FuncProto = Function.prototype;
                var push = ArrayProto.push,
                    slice = ArrayProto.slice,
                    concat = ArrayProto.concat,
                    toString = ObjProto.toString,
                    hasOwnProperty = ObjProto.hasOwnProperty;
                var nativeForEach = ArrayProto.forEach,
                    nativeMap = ArrayProto.map,
                    nativeReduce = ArrayProto.reduce,
                    nativeReduceRight = ArrayProto.reduceRight,
                    nativeFilter = ArrayProto.filter,
                    nativeEvery = ArrayProto.every,
                    nativeSome = ArrayProto.some,
                    nativeIndexOf = ArrayProto.indexOf,
                    nativeLastIndexOf = ArrayProto.lastIndexOf,
                    nativeIsArray = Array.isArray,
                    nativeKeys = Object.keys,
                    nativeBind = FuncProto.bind;
                var _ = function(obj) {
                    if (obj instanceof _) return obj;
                    if (!(this instanceof _)) return new _(obj);
                    this._wrapped = obj
                };
                if (typeof exports !== "undefined") {
                    if (typeof module !== "undefined" && module.exports) {
                        exports = module.exports = _
                    }
                    exports._ = _
                } else {
                    root._ = _
                }
                _.VERSION = "1.5.2";
                var each = _.each = _.forEach = function(obj, iterator, context) {
                    if (obj == null) return;
                    if (nativeForEach && obj.forEach === nativeForEach) {
                        obj.forEach(iterator, context)
                    } else if (obj.length === +obj.length) {
                        for (var i = 0, length = obj.length; i < length; i++) {
                            if (iterator.call(context, obj[i], i, obj) === breaker) return
                        }
                    } else {
                        var keys = _.keys(obj);
                        for (var i = 0, length = keys.length; i < length; i++) {
                            if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return
                        }
                    }
                };
                _.map = _.collect = function(obj, iterator, context) {
                    var results = [];
                    if (obj == null) return results;
                    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
                    each(obj, function(value, index, list) {
                        results.push(iterator.call(context, value, index, list))
                    });
                    return results
                };
                var reduceError = "Reduce of empty array with no initial value";
                _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
                    var initial = arguments.length > 2;
                    if (obj == null) obj = [];
                    if (nativeReduce && obj.reduce === nativeReduce) {
                        if (context) iterator = _.bind(iterator, context);
                        return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator)
                    }
                    each(obj, function(value, index, list) {
                        if (!initial) {
                            memo = value;
                            initial = true
                        } else {
                            memo = iterator.call(context, memo, value, index, list)
                        }
                    });
                    if (!initial) throw new TypeError(reduceError);
                    return memo
                };
                _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
                    var initial = arguments.length > 2;
                    if (obj == null) obj = [];
                    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
                        if (context) iterator = _.bind(iterator, context);
                        return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator)
                    }
                    var length = obj.length;
                    if (length !== +length) {
                        var keys = _.keys(obj);
                        length = keys.length
                    }
                    each(obj, function(value, index, list) {
                        index = keys ? keys[--length] : --length;
                        if (!initial) {
                            memo = obj[index];
                            initial = true
                        } else {
                            memo = iterator.call(context, memo, obj[index], index, list)
                        }
                    });
                    if (!initial) throw new TypeError(reduceError);
                    return memo
                };
                _.find = _.detect = function(obj, iterator, context) {
                    var result;
                    any(obj, function(value, index, list) {
                        if (iterator.call(context, value, index, list)) {
                            result = value;
                            return true
                        }
                    });
                    return result
                };
                _.filter = _.select = function(obj, iterator, context) {
                    var results = [];
                    if (obj == null) return results;
                    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
                    each(obj, function(value, index, list) {
                        if (iterator.call(context, value, index, list)) results.push(value)
                    });
                    return results
                };
                _.reject = function(obj, iterator, context) {
                    return _.filter(obj, function(value, index, list) {
                        return !iterator.call(context, value, index, list)
                    }, context)
                };
                _.every = _.all = function(obj, iterator, context) {
                    iterator || (iterator = _.identity);
                    var result = true;
                    if (obj == null) return result;
                    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
                    each(obj, function(value, index, list) {
                        if (!(result = result && iterator.call(context, value, index, list))) return breaker
                    });
                    return !!result
                };
                var any = _.some = _.any = function(obj, iterator, context) {
                    iterator || (iterator = _.identity);
                    var result = false;
                    if (obj == null) return result;
                    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
                    each(obj, function(value, index, list) {
                        if (result || (result = iterator.call(context, value, index, list))) return breaker
                    });
                    return !!result
                };
                _.contains = _.include = function(obj, target) {
                    if (obj == null) return false;
                    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
                    return any(obj, function(value) {
                        return value === target
                    })
                };
                _.invoke = function(obj, method) {
                    var args = slice.call(arguments, 2);
                    var isFunc = _.isFunction(method);
                    return _.map(obj, function(value) {
                        return (isFunc ? method : value[method]).apply(value, args)
                    })
                };
                _.pluck = function(obj, key) {
                    return _.map(obj, function(value) {
                        return value[key]
                    })
                };
                _.where = function(obj, attrs, first) {
                    if (_.isEmpty(attrs)) return first ? void 0 : [];
                    return _[first ? "find" : "filter"](obj, function(value) {
                        for (var key in attrs) {
                            if (attrs[key] !== value[key]) return false
                        }
                        return true
                    })
                };
                _.findWhere = function(obj, attrs) {
                    return _.where(obj, attrs, true)
                };
                _.max = function(obj, iterator, context) {
                    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
                        return Math.max.apply(Math, obj)
                    }
                    if (!iterator && _.isEmpty(obj)) return -Infinity;
                    var result = {
                        computed: -Infinity,
                        value: -Infinity
                    };
                    each(obj, function(value, index, list) {
                        var computed = iterator ? iterator.call(context, value, index, list) : value;
                        computed > result.computed && (result = {
                            value: value,
                            computed: computed
                        })
                    });
                    return result.value
                };
                _.min = function(obj, iterator, context) {
                    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
                        return Math.min.apply(Math, obj)
                    }
                    if (!iterator && _.isEmpty(obj)) return Infinity;
                    var result = {
                        computed: Infinity,
                        value: Infinity
                    };
                    each(obj, function(value, index, list) {
                        var computed = iterator ? iterator.call(context, value, index, list) : value;
                        computed < result.computed && (result = {
                            value: value,
                            computed: computed
                        })
                    });
                    return result.value
                };
                _.shuffle = function(obj) {
                    var rand;
                    var index = 0;
                    var shuffled = [];
                    each(obj, function(value) {
                        rand = _.random(index++);
                        shuffled[index - 1] = shuffled[rand];
                        shuffled[rand] = value
                    });
                    return shuffled
                };
                _.sample = function(obj, n, guard) {
                    if (arguments.length < 2 || guard) {
                        return obj[_.random(obj.length - 1)]
                    }
                    return _.shuffle(obj).slice(0, Math.max(0, n))
                };
                var lookupIterator = function(value) {
                    return _.isFunction(value) ? value : function(obj) {
                        return obj[value]
                    }
                };
                _.sortBy = function(obj, value, context) {
                    var iterator = lookupIterator(value);
                    return _.pluck(_.map(obj, function(value, index, list) {
                        return {
                            value: value,
                            index: index,
                            criteria: iterator.call(context, value, index, list)
                        }
                    }).sort(function(left, right) {
                        var a = left.criteria;
                        var b = right.criteria;
                        if (a !== b) {
                            if (a > b || a === void 0) return 1;
                            if (a < b || b === void 0) return -1
                        }
                        return left.index - right.index
                    }), "value")
                };
                var group = function(behavior) {
                    return function(obj, value, context) {
                        var result = {};
                        var iterator = value == null ? _.identity : lookupIterator(value);
                        each(obj, function(value, index) {
                            var key = iterator.call(context, value, index, obj);
                            behavior(result, key, value)
                        });
                        return result
                    }
                };
                _.groupBy = group(function(result, key, value) {
                    (_.has(result, key) ? result[key] : result[key] = []).push(value)
                });
                _.indexBy = group(function(result, key, value) {
                    result[key] = value
                });
                _.countBy = group(function(result, key) {
                    _.has(result, key) ? result[key]++ : result[key] = 1
                });
                _.sortedIndex = function(array, obj, iterator, context) {
                    iterator = iterator == null ? _.identity : lookupIterator(iterator);
                    var value = iterator.call(context, obj);
                    var low = 0,
                        high = array.length;
                    while (low < high) {
                        var mid = low + high >>> 1;
                        iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid
                    }
                    return low
                };
                _.toArray = function(obj) {
                    if (!obj) return [];
                    if (_.isArray(obj)) return slice.call(obj);
                    if (obj.length === +obj.length) return _.map(obj, _.identity);
                    return _.values(obj)
                };
                _.size = function(obj) {
                    if (obj == null) return 0;
                    return obj.length === +obj.length ? obj.length : _.keys(obj).length
                };
                _.first = _.head = _.take = function(array, n, guard) {
                    if (array == null) return void 0;
                    return n == null || guard ? array[0] : slice.call(array, 0, n)
                };
                _.initial = function(array, n, guard) {
                    return slice.call(array, 0, array.length - (n == null || guard ? 1 : n))
                };
                _.last = function(array, n, guard) {
                    if (array == null) return void 0;
                    if (n == null || guard) {
                        return array[array.length - 1]
                    } else {
                        return slice.call(array, Math.max(array.length - n, 0))
                    }
                };
                _.rest = _.tail = _.drop = function(array, n, guard) {
                    return slice.call(array, n == null || guard ? 1 : n)
                };
                _.compact = function(array) {
                    return _.filter(array, _.identity)
                };
                var flatten = function(input, shallow, output) {
                    if (shallow && _.every(input, _.isArray)) {
                        return concat.apply(output, input)
                    }
                    each(input, function(value) {
                        if (_.isArray(value) || _.isArguments(value)) {
                            shallow ? push.apply(output, value) : flatten(value, shallow, output)
                        } else {
                            output.push(value)
                        }
                    });
                    return output
                };
                _.flatten = function(array, shallow) {
                    return flatten(array, shallow, [])
                };
                _.without = function(array) {
                    return _.difference(array, slice.call(arguments, 1))
                };
                _.uniq = _.unique = function(array, isSorted, iterator, context) {
                    if (_.isFunction(isSorted)) {
                        context = iterator;
                        iterator = isSorted;
                        isSorted = false
                    }
                    var initial = iterator ? _.map(array, iterator, context) : array;
                    var results = [];
                    var seen = [];
                    each(initial, function(value, index) {
                        if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
                            seen.push(value);
                            results.push(array[index])
                        }
                    });
                    return results
                };
                _.union = function() {
                    return _.uniq(_.flatten(arguments, true))
                };
                _.intersection = function(array) {
                    var rest = slice.call(arguments, 1);
                    return _.filter(_.uniq(array), function(item) {
                        return _.every(rest, function(other) {
                            return _.indexOf(other, item) >= 0
                        })
                    })
                };
                _.difference = function(array) {
                    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
                    return _.filter(array, function(value) {
                        return !_.contains(rest, value)
                    })
                };
                _.zip = function() {
                    var length = _.max(_.pluck(arguments, "length").concat(0));
                    var results = new Array(length);
                    for (var i = 0; i < length; i++) {
                        results[i] = _.pluck(arguments, "" + i)
                    }
                    return results
                };
                _.object = function(list, values) {
                    if (list == null) return {};
                    var result = {};
                    for (var i = 0, length = list.length; i < length; i++) {
                        if (values) {
                            result[list[i]] = values[i]
                        } else {
                            result[list[i][0]] = list[i][1]
                        }
                    }
                    return result
                };
                _.indexOf = function(array, item, isSorted) {
                    if (array == null) return -1;
                    var i = 0,
                        length = array.length;
                    if (isSorted) {
                        if (typeof isSorted == "number") {
                            i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted
                        } else {
                            i = _.sortedIndex(array, item);
                            return array[i] === item ? i : -1
                        }
                    }
                    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
                    for (; i < length; i++)
                        if (array[i] === item) return i;
                    return -1
                };
                _.lastIndexOf = function(array, item, from) {
                    if (array == null) return -1;
                    var hasIndex = from != null;
                    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
                        return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item)
                    }
                    var i = hasIndex ? from : array.length;
                    while (i--)
                        if (array[i] === item) return i;
                    return -1
                };
                _.range = function(start, stop, step) {
                    if (arguments.length <= 1) {
                        stop = start || 0;
                        start = 0
                    }
                    step = arguments[2] || 1;
                    var length = Math.max(Math.ceil((stop - start) / step), 0);
                    var idx = 0;
                    var range = new Array(length);
                    while (idx < length) {
                        range[idx++] = start;
                        start += step
                    }
                    return range
                };
                var ctor = function() {};
                _.bind = function(func, context) {
                    var args, bound;
                    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
                    if (!_.isFunction(func)) throw new TypeError;
                    args = slice.call(arguments, 2);
                    return bound = function() {
                        if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
                        ctor.prototype = func.prototype;
                        var self = new ctor;
                        ctor.prototype = null;
                        var result = func.apply(self, args.concat(slice.call(arguments)));
                        if (Object(result) === result) return result;
                        return self
                    }
                };
                _.partial = function(func) {
                    var args = slice.call(arguments, 1);
                    return function() {
                        return func.apply(this, args.concat(slice.call(arguments)))
                    }
                };
                _.bindAll = function(obj) {
                    var funcs = slice.call(arguments, 1);
                    if (funcs.length === 0) throw new Error("bindAll must be passed function names");
                    each(funcs, function(f) {
                        obj[f] = _.bind(obj[f], obj)
                    });
                    return obj
                };
                _.memoize = function(func, hasher) {
                    var memo = {};
                    hasher || (hasher = _.identity);
                    return function() {
                        var key = hasher.apply(this, arguments);
                        return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments)
                    }
                };
                _.delay = function(func, wait) {
                    var args = slice.call(arguments, 2);
                    return setTimeout(function() {
                        return func.apply(null, args)
                    }, wait)
                };
                _.defer = function(func) {
                    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)))
                };
                _.throttle = function(func, wait, options) {
                    var context, args, result;
                    var timeout = null;
                    var previous = 0;
                    options || (options = {});
                    var later = function() {
                        previous = options.leading === false ? 0 : new Date;
                        timeout = null;
                        result = func.apply(context, args)
                    };
                    return function() {
                        var now = new Date;
                        if (!previous && options.leading === false) previous = now;
                        var remaining = wait - (now - previous);
                        context = this;
                        args = arguments;
                        if (remaining <= 0) {
                            clearTimeout(timeout);
                            timeout = null;
                            previous = now;
                            result = func.apply(context, args)
                        } else if (!timeout && options.trailing !== false) {
                            timeout = setTimeout(later, remaining)
                        }
                        return result
                    }
                };
                _.debounce = function(func, wait, immediate) {
                    var timeout, args, context, timestamp, result;
                    return function() {
                        context = this;
                        args = arguments;
                        timestamp = new Date;
                        var later = function() {
                            var last = new Date - timestamp;
                            if (last < wait) {
                                timeout = setTimeout(later, wait - last)
                            } else {
                                timeout = null;
                                if (!immediate) result = func.apply(context, args)
                            }
                        };
                        var callNow = immediate && !timeout;
                        if (!timeout) {
                            timeout = setTimeout(later, wait)
                        }
                        if (callNow) result = func.apply(context, args);
                        return result
                    }
                };
                _.once = function(func) {
                    var ran = false,
                        memo;
                    return function() {
                        if (ran) return memo;
                        ran = true;
                        memo = func.apply(this, arguments);
                        func = null;
                        return memo
                    }
                };
                _.wrap = function(func, wrapper) {
                    return function() {
                        var args = [func];
                        push.apply(args, arguments);
                        return wrapper.apply(this, args)
                    }
                };
                _.compose = function() {
                    var funcs = arguments;
                    return function() {
                        var args = arguments;
                        for (var i = funcs.length - 1; i >= 0; i--) {
                            args = [funcs[i].apply(this, args)]
                        }
                        return args[0]
                    }
                };
                _.after = function(times, func) {
                    return function() {
                        if (--times < 1) {
                            return func.apply(this, arguments)
                        }
                    }
                };
                _.keys = nativeKeys || function(obj) {
                    if (obj !== Object(obj)) throw new TypeError("Invalid object");
                    var keys = [];
                    for (var key in obj)
                        if (_.has(obj, key)) keys.push(key);
                    return keys
                };
                _.values = function(obj) {
                    var keys = _.keys(obj);
                    var length = keys.length;
                    var values = new Array(length);
                    for (var i = 0; i < length; i++) {
                        values[i] = obj[keys[i]]
                    }
                    return values
                };
                _.pairs = function(obj) {
                    var keys = _.keys(obj);
                    var length = keys.length;
                    var pairs = new Array(length);
                    for (var i = 0; i < length; i++) {
                        pairs[i] = [keys[i], obj[keys[i]]]
                    }
                    return pairs
                };
                _.invert = function(obj) {
                    var result = {};
                    var keys = _.keys(obj);
                    for (var i = 0, length = keys.length; i < length; i++) {
                        result[obj[keys[i]]] = keys[i]
                    }
                    return result
                };
                _.functions = _.methods = function(obj) {
                    var names = [];
                    for (var key in obj) {
                        if (_.isFunction(obj[key])) names.push(key)
                    }
                    return names.sort()
                };
                _.extend = function(obj) {
                    each(slice.call(arguments, 1), function(source) {
                        if (source) {
                            for (var prop in source) {
                                obj[prop] = source[prop]
                            }
                        }
                    });
                    return obj
                };
                _.pick = function(obj) {
                    var copy = {};
                    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
                    each(keys, function(key) {
                        if (key in obj) copy[key] = obj[key]
                    });
                    return copy
                };
                _.omit = function(obj) {
                    var copy = {};
                    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
                    for (var key in obj) {
                        if (!_.contains(keys, key)) copy[key] = obj[key]
                    }
                    return copy
                };
                _.defaults = function(obj) {
                    each(slice.call(arguments, 1), function(source) {
                        if (source) {
                            for (var prop in source) {
                                if (obj[prop] === void 0) obj[prop] = source[prop]
                            }
                        }
                    });
                    return obj
                };
                _.clone = function(obj) {
                    if (!_.isObject(obj)) return obj;
                    return _.isArray(obj) ? obj.slice() : _.extend({}, obj)
                };
                _.tap = function(obj, interceptor) {
                    interceptor(obj);
                    return obj
                };
                var eq = function(a, b, aStack, bStack) {
                    if (a === b) return a !== 0 || 1 / a == 1 / b;
                    if (a == null || b == null) return a === b;
                    if (a instanceof _) a = a._wrapped;
                    if (b instanceof _) b = b._wrapped;
                    var className = toString.call(a);
                    if (className != toString.call(b)) return false;
                    switch (className) {
                        case "[object String]":
                            return a == String(b);
                        case "[object Number]":
                            return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +a == +b;
                        case "[object RegExp]":
                            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
                    }
                    if (typeof a != "object" || typeof b != "object") return false;
                    var length = aStack.length;
                    while (length--) {
                        if (aStack[length] == a) return bStack[length] == b
                    }
                    var aCtor = a.constructor,
                        bCtor = b.constructor;
                    if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor)) {
                        return false
                    }
                    aStack.push(a);
                    bStack.push(b);
                    var size = 0,
                        result = true;
                    if (className == "[object Array]") {
                        size = a.length;
                        result = size == b.length;
                        if (result) {
                            while (size--) {
                                if (!(result = eq(a[size], b[size], aStack, bStack))) break
                            }
                        }
                    } else {
                        for (var key in a) {
                            if (_.has(a, key)) {
                                size++;
                                if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break
                            }
                        }
                        if (result) {
                            for (key in b) {
                                if (_.has(b, key) && !size--) break
                            }
                            result = !size
                        }
                    }
                    aStack.pop();
                    bStack.pop();
                    return result
                };
                _.isEqual = function(a, b) {
                    return eq(a, b, [], [])
                };
                _.isEmpty = function(obj) {
                    if (obj == null) return true;
                    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
                    for (var key in obj)
                        if (_.has(obj, key)) return false;
                    return true
                };
                _.isElement = function(obj) {
                    return !!(obj && obj.nodeType === 1)
                };
                _.isArray = nativeIsArray || function(obj) {
                    return toString.call(obj) == "[object Array]"
                };
                _.isObject = function(obj) {
                    return obj === Object(obj)
                };
                each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(name) {
                    _["is" + name] = function(obj) {
                        return toString.call(obj) == "[object " + name + "]"
                    }
                });
                if (!_.isArguments(arguments)) {
                    _.isArguments = function(obj) {
                        return !!(obj && _.has(obj, "callee"))
                    }
                }
                if (typeof / . / !== "function") {
                    _.isFunction = function(obj) {
                        return typeof obj === "function"
                    }
                }
                _.isFinite = function(obj) {
                    return isFinite(obj) && !isNaN(parseFloat(obj))
                };
                _.isNaN = function(obj) {
                    return _.isNumber(obj) && obj != +obj
                };
                _.isBoolean = function(obj) {
                    return obj === true || obj === false || toString.call(obj) == "[object Boolean]"
                };
                _.isNull = function(obj) {
                    return obj === null
                };
                _.isUndefined = function(obj) {
                    return obj === void 0
                };
                _.has = function(obj, key) {
                    return hasOwnProperty.call(obj, key)
                };
                _.noConflict = function() {
                    root._ = previousUnderscore;
                    return this
                };
                _.identity = function(value) {
                    return value
                };
                _.times = function(n, iterator, context) {
                    var accum = Array(Math.max(0, n));
                    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
                    return accum
                };
                _.random = function(min, max) {
                    if (max == null) {
                        max = min;
                        min = 0
                    }
                    return min + Math.floor(Math.random() * (max - min + 1))
                };
                var entityMap = {
                    escape: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;"
                    }
                };
                entityMap.unescape = _.invert(entityMap.escape);
                var entityRegexes = {
                    escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
                    unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
                };
                _.each(["escape", "unescape"], function(method) {
                    _[method] = function(string) {
                        if (string == null) return "";
                        return ("" + string).replace(entityRegexes[method], function(match) {
                            return entityMap[method][match]
                        })
                    }
                });
                _.result = function(object, property) {
                    if (object == null) return void 0;
                    var value = object[property];
                    return _.isFunction(value) ? value.call(object) : value
                };
                _.mixin = function(obj) {
                    each(_.functions(obj), function(name) {
                        var func = _[name] = obj[name];
                        _.prototype[name] = function() {
                            var args = [this._wrapped];
                            push.apply(args, arguments);
                            return result.call(this, func.apply(_, args))
                        }
                    })
                };
                var idCounter = 0;
                _.uniqueId = function(prefix) {
                    var id = ++idCounter + "";
                    return prefix ? prefix + id : id
                };
                _.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var noMatch = /(.)^/;
                var escapes = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    " ": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                };
                var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                _.template = function(text, data, settings) {
                    var render;
                    settings = _.defaults({}, settings, _.templateSettings);
                    var matcher = new RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
                    var index = 0;
                    var source = "__p+='";
                    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                        source += text.slice(index, offset).replace(escaper, function(match) {
                            return "\\" + escapes[match]
                        });
                        if (escape) {
                            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'"
                        }
                        if (interpolate) {
                            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'"
                        }
                        if (evaluate) {
                            source += "';\n" + evaluate + "\n__p+='"
                        }
                        index = offset + match.length;
                        return match
                    });
                    source += "';\n";
                    if (!settings.variable) source = "with(obj||{}){\n" + source + "}\n";
                    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
                    try {
                        render = new Function(settings.variable || "obj", "_", source)
                    } catch (e) {
                        e.source = source;
                        throw e
                    }
                    if (data) return render(data, _);
                    var template = function(data) {
                        return render.call(this, data, _)
                    };
                    template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}";
                    return template
                };
                _.chain = function(obj) {
                    return _(obj).chain()
                };
                var result = function(obj) {
                    return this._chain ? _(obj).chain() : obj
                };
                _.mixin(_);
                each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
                    var method = ArrayProto[name];
                    _.prototype[name] = function() {
                        var obj = this._wrapped;
                        method.apply(obj, arguments);
                        if ((name == "shift" || name == "splice") && obj.length === 0) delete obj[0];
                        return result.call(this, obj)
                    }
                });
                each(["concat", "join", "slice"], function(name) {
                    var method = ArrayProto[name];
                    _.prototype[name] = function() {
                        return result.call(this, method.apply(this._wrapped, arguments))
                    }
                });
                _.extend(_.prototype, {
                    chain: function() {
                        this._chain = true;
                        return this
                    },
                    value: function() {
                        return this._wrapped
                    }
                })
            }).call(this)
        }, {}
    ],
    44: [
        function(require, module, exports) {
            var global = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
            var Auth0Widget = require("./widget");
            if (typeof global.window.define == "function" && global.window.define.amd) {
                global.window.define(function() {
                    return Auth0Widget
                })
            } else if (global.window) {
                global.window.Auth0Widget = Auth0Widget
            }
        }, {
            "./widget": 50
        }
    ],
    45: [
        function(require, module, exports) {
            module.exports = function anonymous(locals, filters, escape, rethrow) {
                escape = escape || function(html) {
                    return String(html).replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
                };
                var __stack = {
                    lineno: 1,
                    input: '<% var icon_class = !use_big_buttons ? \'a0-icon\' : \'a0-block\' %>\n<span tabindex="0"\n data-strategy="<%= name %>"\n title="<%= title %>"\n class="a0-zocial <%= icon_class %> a0-<%= css %> <%= locals.imageicon ? \'a0-image-icon\' : \'\' %>" dir="ltr"><%= title %></span>',
                    filename: "/opt/TeamCity-Agent2/work/8a8883c09268380f/widget/html/button.ejs"
                };

                function rethrow(err, str, filename, lineno) {
                    var lines = str.split("\n"),
                        start = Math.max(lineno - 3, 0),
                        end = Math.min(lines.length, lineno + 3);
                    var context = lines.slice(start, end).map(function(line, i) {
                        var curr = i + start + 1;
                        return (curr == lineno ? " >> " : "    ") + curr + "| " + line
                    }).join("\n");
                    err.path = filename;
                    err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
                    throw err
                }
                try {
                    var buf = [];
                    with(locals || {}) {
                        (function() {
                            buf.push("");
                            __stack.lineno = 1;
                            var icon_class = !use_big_buttons ? "a0-icon" : "a0-block";
                            buf.push('\n<span tabindex="0"\n data-strategy="', escape((__stack.lineno = 3, name)), '"\n title="', escape((__stack.lineno = 4, title)), '"\n class="a0-zocial ', escape((__stack.lineno = 5, icon_class)), " a0-", escape((__stack.lineno = 5, css)), " ", escape((__stack.lineno = 5, locals.imageicon ? "a0-image-icon" : "")), '" dir="ltr">', escape((__stack.lineno = 5, title)), "</span>")
                        })()
                    }
                    return buf.join("")
                } catch (err) {
                    rethrow(err, __stack.input, __stack.filename, __stack.lineno)
                }
            }
        }, {}
    ],
    46: [
        function(require, module, exports) {
            module.exports = function anonymous(locals, filters, escape, rethrow) {
                escape = escape || function(html) {
                    return String(html).replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
                };
                var __stack = {
                    lineno: 1,
                    input: "<span tabindex=\"0\"\n data-strategy=\"<%= name %>\"\n title=\"<%= username ? (username + ' (' + title + ')') : title %>\"\n class=\"a0-zocial a0-block a0-<%= css %> <%= locals.imageicon ? 'a0-image-icon' : '' %>\">\n <%= username || title %>\n</span>",
                    filename: "/opt/TeamCity-Agent2/work/8a8883c09268380f/widget/html/loggedin_button.ejs"
                };

                function rethrow(err, str, filename, lineno) {
                    var lines = str.split("\n"),
                        start = Math.max(lineno - 3, 0),
                        end = Math.min(lines.length, lineno + 3);
                    var context = lines.slice(start, end).map(function(line, i) {
                        var curr = i + start + 1;
                        return (curr == lineno ? " >> " : "    ") + curr + "| " + line
                    }).join("\n");
                    err.path = filename;
                    err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
                    throw err
                }
                try {
                    var buf = [];
                    with(locals || {}) {
                        (function() {
                            buf.push('<span tabindex="0"\n data-strategy="', escape((__stack.lineno = 2, name)), '"\n title="', escape((__stack.lineno = 3, username ? username + " (" + title + ")" : title)), '"\n class="a0-zocial a0-block a0-', escape((__stack.lineno = 4, css)), " ", escape((__stack.lineno = 4, locals.imageicon ? "a0-image-icon" : "")), '">\n ', escape((__stack.lineno = 5, username || title)), "\n</span>")
                        })()
                    }
                    return buf.join("")
                } catch (err) {
                    rethrow(err, __stack.input, __stack.filename, __stack.lineno)
                }
            }
        }, {}
    ],
    47: [
        function(require, module, exports) {
            module.exports = function anonymous(locals, filters, escape, rethrow) {
                escape = escape || function(html) {
                    return String(html).replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
                };
                var __stack = {
                    lineno: 1,
                    input: '<label class="a0-create-account">\n  <% if (showSignup) { %>\n  <a href="<%= locals.signupLink || \'javascript: {}\' %>"\n    class="a0-sign-up">\n    <%= i18n.t(\'signin:signupText\') %>\n  </a>\n  <% } %>\n  <% if (showSignup && showForgot) { %>\n  <span class="a0-divider">&nbsp;\u2022&nbsp;</span>\n  <% } %>\n  <% if (showForgot) { %>\n  <a href="<%= locals.forgotLink || \'javascript: {}\' %>"\n    class="a0-forgot-pass"><%= i18n.t(\'signin:forgotText\') %></a>\n  <% } %>\n</label>',
                    filename: "/opt/TeamCity-Agent2/work/8a8883c09268380f/widget/html/login_actions.ejs"
                };

                function rethrow(err, str, filename, lineno) {
                    var lines = str.split("\n"),
                        start = Math.max(lineno - 3, 0),
                        end = Math.min(lines.length, lineno + 3);
                    var context = lines.slice(start, end).map(function(line, i) {
                        var curr = i + start + 1;
                        return (curr == lineno ? " >> " : "    ") + curr + "| " + line
                    }).join("\n");
                    err.path = filename;
                    err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
                    throw err
                }
                try {
                    var buf = [];
                    with(locals || {}) {
                        (function() {
                            buf.push('<label class="a0-create-account">\n  ');
                            __stack.lineno = 2;
                            if (showSignup) {
                                buf.push('\n  <a href="', escape((__stack.lineno = 3, locals.signupLink || "javascript: {}")), '"\n    class="a0-sign-up">\n    ', escape((__stack.lineno = 5, i18n.t("signin:signupText"))), "\n  </a>\n  ");
                                __stack.lineno = 7
                            }
                            buf.push("\n  ");
                            __stack.lineno = 8;
                            if (showSignup && showForgot) {
                                buf.push('\n  <span class="a0-divider">&nbsp;\u2022&nbsp;</span>\n  ');
                                __stack.lineno = 10
                            }
                            buf.push("\n  ");
                            __stack.lineno = 11;
                            if (showForgot) {
                                buf.push('\n  <a href="', escape((__stack.lineno = 12, locals.forgotLink || "javascript: {}")), '"\n    class="a0-forgot-pass">', escape((__stack.lineno = 13, i18n.t("signin:forgotText"))), "</a>\n  ");
                                __stack.lineno = 14
                            }
                            buf.push("\n</label>")
                        })()
                    }
                    return buf.join("")
                } catch (err) {
                    rethrow(err, __stack.input, __stack.filename, __stack.lineno)
                }
            }
        }, {}
    ],
    48: [
        function(require, module, exports) {
            module.exports = function anonymous(locals, filters, escape, rethrow) {
                escape = escape || function(html) {
                    return String(html).replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
                };
                var __stack = {
                    lineno: 1,
                    input: '<div id="a0-widget" class="a0-widget" dir="auto">\n    <div class="a0-signin <%= locals && locals.embedded ? \'a0-embedded\' : \'\' %> <%= options.theme ? (\'a0-theme-\' + options.theme) : \'\' %>">\n        <div class="a0-popup">\n            <div class="a0-overlay">\n                <div class="<%= locals && locals.expand ? \'\' : \'a0-centrix\' %>">\n                    <% include widget %>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n',
                    filename: "/opt/TeamCity-Agent2/work/8a8883c09268380f/widget/html/main.ejs"
                };

                function rethrow(err, str, filename, lineno) {
                    var lines = str.split("\n"),
                        start = Math.max(lineno - 3, 0),
                        end = Math.min(lines.length, lineno + 3);
                    var context = lines.slice(start, end).map(function(line, i) {
                        var curr = i + start + 1;
                        return (curr == lineno ? " >> " : "    ") + curr + "| " + line
                    }).join("\n");
                    err.path = filename;
                    err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
                    throw err
                }
                try {
                    var buf = [];
                    with(locals || {}) {
                        (function() {
                            buf.push('<div id="a0-widget" class="a0-widget" dir="auto">\n    <div class="a0-signin ', escape((__stack.lineno = 2, locals && locals.embedded ? "a0-embedded" : "")), " ", escape((__stack.lineno = 2, options.theme ? "a0-theme-" + options.theme : "")), '">\n        <div class="a0-popup">\n            <div class="a0-overlay">\n                <div class="', escape((__stack.lineno = 5, locals && locals.expand ? "" : "a0-centrix")), '">\n                    ' + function() {
                                var buf = [];
                                buf.push('<div id="a0-onestep" class="a0-panel a0-onestep">\n    ');
                                __stack.lineno = 2;
                                if (!locals.embedded) {
                                    buf.push('\n    <div class="a0-header a0-top-header">\n        <div class="a0-image" style="display: ', escape((__stack.lineno = 4, !options.showIcon ? "none" : "block")), '">\n            <img src="', escape((__stack.lineno = 5, options.icon || "")), '">\n        </div>\n        <h1>', escape((__stack.lineno = 7, i18n.t("signin:title"))), '</h1>\n        <h2 class="a0-error" style="display: none">&nbsp;</h2>\n        <h2 class="a0-success" style="display: none">&nbsp;</h2>\n        <a class="a0-close" style="display: ', escape((__stack.lineno = 10, options.standalone ? "none" : "block")), ';">', escape((__stack.lineno = 10, i18n.t("close"))), "</a>\n    </div>\n    ");
                                    __stack.lineno = 12
                                }
                                buf.push('\n\n    <div class="a0-loading a0-mode">\n        ');
                                __stack.lineno = 15;
                                if (locals.alt_spinner) {
                                    buf.push('\n        <div class="a0-spin-img" style="background-image: url(\'', escape((__stack.lineno = 16, locals.alt_spinner)), "')\"></div>\n        ");
                                    __stack.lineno = 17
                                } else {
                                    buf.push('\n        <div class="a0-spin-container">\n            <div class="a0-spinner-css">\n              <span class="a0-side a0-sp_left">\n                <span class="a0-fill"></span>\n              </span>\n              <span class="a0-side a0-sp_right">\n                <span class="a0-fill"></span>\n              </span>\n            </div>\n            <div class="a0-spin-message">\n                <span>&nbsp;</span>\n            </div>\n        </div>\n        ');
                                    __stack.lineno = 31
                                }
                                buf.push("\n    </div>\n\n\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-loggedin a0-mode" style="display: none;">\n    <form>\n        <span class="a0-centered a0-last-time">', escape((__stack.lineno = 3, i18n.t("signin:returnUserLabel"))), '</span>\n        <div class="a0-strategy"></div>\n        <div class="a0-emailPassword" style="display:none">\n            <div class="a0-email">\n                <span class="a0-email-readonly"></span>\n                <input name="email"\n                       type="email"\n                       value=""\n                       disabled\n                       placeholder="', escape((__stack.lineno = 12, i18n.t("signin:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 13, i18n.t("signin:emailPlaceholder"))), '"\n                       style="display:none">\n            </div>\n            <div class="a0-password">\n                <label class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 18, i18n.t("signin:passwordPlaceholder"))), '\n                </label>\n                <input name="password" type="password"\n                       autofocus\n                       placeholder="', escape((__stack.lineno = 22, i18n.t("signin:passwordPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 23, i18n.t("signin:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 26, i18n.t("signin:action"))), "</button>\n                ");
                                    __stack.lineno = 27;
                                    if (options.showForgot !== false) {
                                        buf.push('\n                <label class="a0-create-account">\n                  <a href="', escape((__stack.lineno = 29, options.forgotLink || "javascript: {}")), '"\n                    class="a0-forgot-pass">', escape((__stack.lineno = 30, i18n.t("signin:forgotText"))), "</a>\n                </label>\n                ");
                                        __stack.lineno = 32
                                    }
                                    buf.push('\n            </div>\n        </div>\n        <span class="a0-centered a0-all">', escape((__stack.lineno = 35, i18n.t("signin:all"))), "</span>\n    </form>\n</div>");
                                    return buf.join("")
                                }() + "\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-notloggedin a0-mode" style="display: none;">\n    <form>\n        <div class="a0-collapse-social">\n          <div class="a0-iconlist" style="display: none"><p style="display:none">', escape((__stack.lineno = 4, i18n.t("signin:or"))), '</p></div>\n          <div class="a0-separator" style="display: none"><span>', escape((__stack.lineno = 5, i18n.t("signin:separatorText"))), '</span></div>\n        </div>\n        <div class="a0-emailPassword">\n            ');
                                    __stack.lineno = 8;
                                    if (options.showEmail !== false) {
                                        buf.push('\n            <div class="a0-email">\n                <label for="a0-signin_easy_email" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 11, i18n.t("signin:emailPlaceholder"))), '\n                </label>\n                <input name="email"\n                       id="a0-signin_easy_email"\n                       type="email"\n                       required\n                       placeholder="', escape((__stack.lineno = 17, i18n.t("signin:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 18, i18n.t("signin:emailPlaceholder"))), '">\n            </div>\n            ');
                                        __stack.lineno = 20
                                    }
                                    buf.push('\n            <div class="a0-password" style="display:none">\n                <label for="a0-signin_easy_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 23, i18n.t("signin:passwordPlaceholder"))), '\n                </label>\n                <input name="password"\n                       id="a0-signin_easy_password"\n                       type="password"\n                       placeholder="', escape((__stack.lineno = 28, i18n.t("signin:passwordPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 29, i18n.t("signin:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 32, i18n.t("signin:action"))), '</button>\n                <div class="a0-db-actions">\n                </div>\n            </div>\n        </div>\n    </form>\n</div>');
                                    return buf.join("")
                                }() + "\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-signup a0-mode" style="display: none;">\n    <form>\n        <div class="a0-header">', escape((__stack.lineno = 3, i18n.t("signup:description"))), '</div>\n        <div class="a0-collapse-social-signup">\n          <div class="a0-iconlist" style="display: none"><p style="display:none">', escape((__stack.lineno = 5, i18n.t("signin:or"))), '</p></div>\n          <div class="a0-separator" style="display: none"><span>', escape((__stack.lineno = 6, i18n.t("signin:separatorText"))), '</span></div>\n        </div>\n        <div class="a0-header">', escape((__stack.lineno = 8, i18n.t("signup:headerText"))), '</div>\n        <div class="a0-emailPassword">\n            <div class="a0-email">\n                <label for="a0-signup_easy_email" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 12, i18n.t("signup:emailPlaceholder"))), '\n                </label>\n                <input name="email" id="a0-signup_easy_email"\n                       type="email" value="" required\n                       placeholder="', escape((__stack.lineno = 16, i18n.t("signup:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 17, i18n.t("signup:emailPlaceholder"))), '">\n            </div>\n            <div class="a0-password">\n                <label for="a0-signup_easy_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 21, i18n.t("signup:passwordPlaceholder"))), '\n                </label>\n                <input name="password" id="a0-signup_easy_password"\n                       type="password" value="" required\n                       placeholder="', escape((__stack.lineno = 25, i18n.t("signup:passwordPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 26, i18n.t("signup:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 29, i18n.t("signup:action"))), '</button>\n                <div class="a0-options">\n                    <a href="javascript: {}" class="a0-centered a0-cancel">', escape((__stack.lineno = 31, i18n.t("signup:cancelAction"))), '</a>\n                </div>\n            </div>\n            <div class="a0-signup-footer">\n            ', (__stack.lineno = 35, i18n.t("signup:footerText")), "\n            </div>\n        </div>\n    </form>\n</div>");
                                    return buf.join("")
                                }() + "\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-reset a0-mode" style="display: none;">\n    <form id="a0-change_password">\n        <div class="a0-collapse-reset">\n            <div class="a0-header a0-instructions">', escape((__stack.lineno = 4, i18n.t("reset:headerText"))), '</div>\n        </div>\n        <div class="a0-emailPassword">\n            <div class="a0-email">\n                <label for="a0-reset_easy_email" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 9, i18n.t("reset:emailPlaceholder"))), '\n                </label>\n                <input name="email"\n                       id="a0-reset_easy_email"\n                       type="email"\n                       value=""\n                       required\n                       placeholder="', escape((__stack.lineno = 16, i18n.t("reset:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 17, i18n.t("reset:emailPlaceholder"))), '">\n            </div>\n            <div class="a0-password">\n                <label for="a0-reset_easy_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 21, i18n.t("reset:passwordPlaceholder"))), '\n                </label>\n                <input name="password"\n                        id="a0-reset_easy_password"\n                        type="password"\n                        value=""\n                        required\n                        placeholder="', escape((__stack.lineno = 28, i18n.t("reset:passwordPlaceholder"))), '"\n                        title="', escape((__stack.lineno = 29, i18n.t("reset:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-repeatPassword">\n                <label for="a0-reset_easy_repeat_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 33, i18n.t("reset:repeatPasswordPlaceholder"))), '\n                </label>\n                <input name="repeat_password"\n                    id="a0-reset_easy_repeat_password"\n                    type="password" value=""\n                    required\n                        placeholder="', escape((__stack.lineno = 39, i18n.t("reset:repeatPasswordPlaceholder"))), '"\n                        title="', escape((__stack.lineno = 40, i18n.t("reset:repeatPasswordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 43, i18n.t("reset:action"))), '</button>\n                <div class="a0-options">\n                    <a href="javascript: {}" class="a0-centered a0-cancel">', escape((__stack.lineno = 45, i18n.t("reset:cancelAction"))), "</a>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");
                                    return buf.join("")
                                }() + '\n\n    <div class=\'a0-footer\'>\n        <span>Powered by <a href="http://auth0.com" target="_new">Auth0</a></span>\n    </div>\n</div>');
                                return buf.join("")
                            }() + "\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n")
                        })()
                    }
                    return buf.join("")
                } catch (err) {
                    rethrow(err, __stack.input, __stack.filename, __stack.lineno)
                }
            }
        }, {}
    ],
    49: [
        function(require, module, exports) {
            module.exports = function anonymous(locals, filters, escape, rethrow) {
                escape = escape || function(html) {
                    return String(html).replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
                };
                var __stack = {
                    lineno: 1,
                    input: '<div id="a0-widget" class="a0-widget" dir="auto">\n    <div class="a0-signin a0-embedded <%= options.theme ? (\'a0-theme-\' + options.theme) : \'\' %>">\n        <% include widget %>\n    </div>\n</div>\n',
                    filename: "/opt/TeamCity-Agent2/work/8a8883c09268380f/widget/html/main_embedded.ejs"
                };

                function rethrow(err, str, filename, lineno) {
                    var lines = str.split("\n"),
                        start = Math.max(lineno - 3, 0),
                        end = Math.min(lines.length, lineno + 3);
                    var context = lines.slice(start, end).map(function(line, i) {
                        var curr = i + start + 1;
                        return (curr == lineno ? " >> " : "    ") + curr + "| " + line
                    }).join("\n");
                    err.path = filename;
                    err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
                    throw err
                }
                try {
                    var buf = [];
                    with(locals || {}) {
                        (function() {
                            buf.push('<div id="a0-widget" class="a0-widget" dir="auto">\n    <div class="a0-signin a0-embedded ', escape((__stack.lineno = 2, options.theme ? "a0-theme-" + options.theme : "")), '">\n        ' + function() {
                                var buf = [];
                                buf.push('<div id="a0-onestep" class="a0-panel a0-onestep">\n    ');
                                __stack.lineno = 2;
                                if (!locals.embedded) {
                                    buf.push('\n    <div class="a0-header a0-top-header">\n        <div class="a0-image" style="display: ', escape((__stack.lineno = 4, !options.showIcon ? "none" : "block")), '">\n            <img src="', escape((__stack.lineno = 5, options.icon || "")), '">\n        </div>\n        <h1>', escape((__stack.lineno = 7, i18n.t("signin:title"))), '</h1>\n        <h2 class="a0-error" style="display: none">&nbsp;</h2>\n        <h2 class="a0-success" style="display: none">&nbsp;</h2>\n        <a class="a0-close" style="display: ', escape((__stack.lineno = 10, options.standalone ? "none" : "block")), ';">', escape((__stack.lineno = 10, i18n.t("close"))), "</a>\n    </div>\n    ");
                                    __stack.lineno = 12
                                }
                                buf.push('\n\n    <div class="a0-loading a0-mode">\n        ');
                                __stack.lineno = 15;
                                if (locals.alt_spinner) {
                                    buf.push('\n        <div class="a0-spin-img" style="background-image: url(\'', escape((__stack.lineno = 16, locals.alt_spinner)), "')\"></div>\n        ");
                                    __stack.lineno = 17
                                } else {
                                    buf.push('\n        <div class="a0-spin-container">\n            <div class="a0-spinner-css">\n              <span class="a0-side a0-sp_left">\n                <span class="a0-fill"></span>\n              </span>\n              <span class="a0-side a0-sp_right">\n                <span class="a0-fill"></span>\n              </span>\n            </div>\n            <div class="a0-spin-message">\n                <span>&nbsp;</span>\n            </div>\n        </div>\n        ');
                                    __stack.lineno = 31
                                }
                                buf.push("\n    </div>\n\n\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-loggedin a0-mode" style="display: none;">\n    <form>\n        <span class="a0-centered a0-last-time">', escape((__stack.lineno = 3, i18n.t("signin:returnUserLabel"))), '</span>\n        <div class="a0-strategy"></div>\n        <div class="a0-emailPassword" style="display:none">\n            <div class="a0-email">\n                <span class="a0-email-readonly"></span>\n                <input name="email"\n                       type="email"\n                       value=""\n                       disabled\n                       placeholder="', escape((__stack.lineno = 12, i18n.t("signin:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 13, i18n.t("signin:emailPlaceholder"))), '"\n                       style="display:none">\n            </div>\n            <div class="a0-password">\n                <label class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 18, i18n.t("signin:passwordPlaceholder"))), '\n                </label>\n                <input name="password" type="password"\n                       autofocus\n                       placeholder="', escape((__stack.lineno = 22, i18n.t("signin:passwordPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 23, i18n.t("signin:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 26, i18n.t("signin:action"))), "</button>\n                ");
                                    __stack.lineno = 27;
                                    if (options.showForgot !== false) {
                                        buf.push('\n                <label class="a0-create-account">\n                  <a href="', escape((__stack.lineno = 29, options.forgotLink || "javascript: {}")), '"\n                    class="a0-forgot-pass">', escape((__stack.lineno = 30, i18n.t("signin:forgotText"))), "</a>\n                </label>\n                ");
                                        __stack.lineno = 32
                                    }
                                    buf.push('\n            </div>\n        </div>\n        <span class="a0-centered a0-all">', escape((__stack.lineno = 35, i18n.t("signin:all"))), "</span>\n    </form>\n</div>");
                                    return buf.join("")
                                }() + "\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-notloggedin a0-mode" style="display: none;">\n    <form>\n        <div class="a0-collapse-social">\n          <div class="a0-iconlist" style="display: none"><p style="display:none">', escape((__stack.lineno = 4, i18n.t("signin:or"))), '</p></div>\n          <div class="a0-separator" style="display: none"><span>', escape((__stack.lineno = 5, i18n.t("signin:separatorText"))), '</span></div>\n        </div>\n        <div class="a0-emailPassword">\n            ');
                                    __stack.lineno = 8;
                                    if (options.showEmail !== false) {
                                        buf.push('\n            <div class="a0-email">\n                <label for="a0-signin_easy_email" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 11, i18n.t("signin:emailPlaceholder"))), '\n                </label>\n                <input name="email"\n                       id="a0-signin_easy_email"\n                       type="email"\n                       required\n                       placeholder="', escape((__stack.lineno = 17, i18n.t("signin:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 18, i18n.t("signin:emailPlaceholder"))), '">\n            </div>\n            ');
                                        __stack.lineno = 20
                                    }
                                    buf.push('\n            <div class="a0-password" style="display:none">\n                <label for="a0-signin_easy_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 23, i18n.t("signin:passwordPlaceholder"))), '\n                </label>\n                <input name="password"\n                       id="a0-signin_easy_password"\n                       type="password"\n                       placeholder="', escape((__stack.lineno = 28, i18n.t("signin:passwordPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 29, i18n.t("signin:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 32, i18n.t("signin:action"))), '</button>\n                <div class="a0-db-actions">\n                </div>\n            </div>\n        </div>\n    </form>\n</div>');
                                    return buf.join("")
                                }() + "\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-signup a0-mode" style="display: none;">\n    <form>\n        <div class="a0-header">', escape((__stack.lineno = 3, i18n.t("signup:description"))), '</div>\n        <div class="a0-collapse-social-signup">\n          <div class="a0-iconlist" style="display: none"><p style="display:none">', escape((__stack.lineno = 5, i18n.t("signin:or"))), '</p></div>\n          <div class="a0-separator" style="display: none"><span>', escape((__stack.lineno = 6, i18n.t("signin:separatorText"))), '</span></div>\n        </div>\n        <div class="a0-header">', escape((__stack.lineno = 8, i18n.t("signup:headerText"))), '</div>\n        <div class="a0-emailPassword">\n            <div class="a0-email">\n                <label for="a0-signup_easy_email" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 12, i18n.t("signup:emailPlaceholder"))), '\n                </label>\n                <input name="email" id="a0-signup_easy_email"\n                       type="email" value="" required\n                       placeholder="', escape((__stack.lineno = 16, i18n.t("signup:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 17, i18n.t("signup:emailPlaceholder"))), '">\n            </div>\n            <div class="a0-password">\n                <label for="a0-signup_easy_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 21, i18n.t("signup:passwordPlaceholder"))), '\n                </label>\n                <input name="password" id="a0-signup_easy_password"\n                       type="password" value="" required\n                       placeholder="', escape((__stack.lineno = 25, i18n.t("signup:passwordPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 26, i18n.t("signup:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 29, i18n.t("signup:action"))), '</button>\n                <div class="a0-options">\n                    <a href="javascript: {}" class="a0-centered a0-cancel">', escape((__stack.lineno = 31, i18n.t("signup:cancelAction"))), '</a>\n                </div>\n            </div>\n            <div class="a0-signup-footer">\n            ', (__stack.lineno = 35, i18n.t("signup:footerText")), "\n            </div>\n        </div>\n    </form>\n</div>");
                                    return buf.join("")
                                }() + "\n    " + function() {
                                    var buf = [];
                                    buf.push('<div class="a0-reset a0-mode" style="display: none;">\n    <form id="a0-change_password">\n        <div class="a0-collapse-reset">\n            <div class="a0-header a0-instructions">', escape((__stack.lineno = 4, i18n.t("reset:headerText"))), '</div>\n        </div>\n        <div class="a0-emailPassword">\n            <div class="a0-email">\n                <label for="a0-reset_easy_email" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 9, i18n.t("reset:emailPlaceholder"))), '\n                </label>\n                <input name="email"\n                       id="a0-reset_easy_email"\n                       type="email"\n                       value=""\n                       required\n                       placeholder="', escape((__stack.lineno = 16, i18n.t("reset:emailPlaceholder"))), '"\n                       title="', escape((__stack.lineno = 17, i18n.t("reset:emailPlaceholder"))), '">\n            </div>\n            <div class="a0-password">\n                <label for="a0-reset_easy_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 21, i18n.t("reset:passwordPlaceholder"))), '\n                </label>\n                <input name="password"\n                        id="a0-reset_easy_password"\n                        type="password"\n                        value=""\n                        required\n                        placeholder="', escape((__stack.lineno = 28, i18n.t("reset:passwordPlaceholder"))), '"\n                        title="', escape((__stack.lineno = 29, i18n.t("reset:passwordPlaceholder"))), '">\n            </div>\n            <div class="a0-repeatPassword">\n                <label for="a0-reset_easy_repeat_password" class="a0-sad-placeholder">\n                  ', escape((__stack.lineno = 33, i18n.t("reset:repeatPasswordPlaceholder"))), '\n                </label>\n                <input name="repeat_password"\n                    id="a0-reset_easy_repeat_password"\n                    type="password" value=""\n                    required\n                        placeholder="', escape((__stack.lineno = 39, i18n.t("reset:repeatPasswordPlaceholder"))), '"\n                        title="', escape((__stack.lineno = 40, i18n.t("reset:repeatPasswordPlaceholder"))), '">\n            </div>\n            <div class="a0-action">\n                <button type="submit" class="a0-zocial a0-primary a0-next" style="width: 100%;">', escape((__stack.lineno = 43, i18n.t("reset:action"))), '</button>\n                <div class="a0-options">\n                    <a href="javascript: {}" class="a0-centered a0-cancel">', escape((__stack.lineno = 45, i18n.t("reset:cancelAction"))), "</a>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");
                                    return buf.join("")
                                }() + '\n\n    <div class=\'a0-footer\'>\n        <span>Powered by <a href="http://auth0.com" target="_new">Auth0</a></span>\n    </div>\n</div>');
                                return buf.join("")
                            }() + "\n    </div>\n</div>\n")
                        })()
                    }
                    return buf.join("")
                } catch (err) {
                    rethrow(err, __stack.input, __stack.filename, __stack.lineno)
                }
            }
        }, {}
    ],
    50: [
        function(require, module, exports) {
            var global = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
            require("../lib/insert-css");
            var Auth0 = require("auth0-js");
            var _ = require("underscore");
            var strategies = require("./js/strategies");
            var mainTmpl = require("./html/main.ejs");
            var embTmpl = require("./html/main_embedded.ejs");
            var buttonTmpl = require("./html/button.ejs");
            var EventEmitter = require("events").EventEmitter;
            var loggedinBtnTmpl = require("./html/loggedin_button.ejs");
            var loginActionsTmpl = require("./html/login_actions.ejs");
            var i18n = require("../i18n");
            var email_parser = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var signup = require("./modes/signup");
            var reset = require("./modes/reset");
            var $ = require("./js/bonzo_qwery");
            var is_small_screen = require("./js/is_small_screen");
            var placeholderSupported = require("./pf/placeholderSupported");
            var object_create = require("./pf/Object.create");
            var transition_end = require("./pf/transition_end");
            var utils = require("./pf/utils");
            var has_animations = require("./pf/has_animations");

            function hasTransitions(el) {
                return require("has-transitions")(el)
            }

            function setfocus(el) {
                if (is_small_screen()) return;
                try {
                    el.focus()
                } catch (er) {}
            }

            function Auth0Widget(options) {
                if (!(this instanceof Auth0Widget)) {
                    return new Auth0Widget(options)
                }
                this._dict = i18n.getDict(options.dict);
                this._options = options;
                this._strategies = strategies;
                this._auth0 = new Auth0({
                    clientID: this._options.clientID,
                    callbackURL: this._options.callbackURL,
                    domain: this._options.domain,
                    callbackOnLocationHash: this._options.callbackOnLocationHash
                });
                if (!this._options.assetsUrl) {
                    this._options.assetsUrl = this._isAuth0Domain() ? "https://s3.amazonaws.com/assets.auth0.com/" : "https://" + this._options.domain + "/"
                }
                if (!this._options.cdn) {
                    this._options.cdn = this._isAuth0Domain() ? "https://d19p4zemcycm7a.cloudfront.net/w2/" : "https://" + this._options.domain + "/w2/"
                }
                this._getApp();
                EventEmitter.call(this);
                var self = this
            }
            Auth0Widget.prototype = object_create(EventEmitter.prototype);
            Auth0Widget.prototype._getApp = function() {
                var self = this;
                global.window.Auth0 = global.window.Auth0 || {};
                global.window.Auth0.setClient = function(client) {
                    self._client = client;
                    self.emit("client_initialized", client)
                };
                var script = document.createElement("script");
                script.src = this._options.assetsUrl + "client/" + this._options.clientID + ".js" + "?t" + +new Date;
                var firstScript = document.getElementsByTagName("script")[0];
                firstScript.parentNode.insertBefore(script, firstScript)
            };
            Auth0Widget.prototype._isAuth0Domain = function() {
                var domainUrl = utils.parseUrl("https://" + this._options.domain);
                return utils.endsWith(domainUrl.hostname, ".auth0.com")
            };
            Auth0Widget.prototype._ignoreEmailValidations = function(input) {
                return input.attr("type") !== "email"
            };
            Auth0Widget.prototype._setCustomValidity = function(input, message) {
                if (!input) return;
                if (input.setCustomValidity) {
                    input.setCustomValidity(message)
                }
            };
            Auth0Widget.prototype._showError = function(error) {
                if (!error) return;
                $("h1").css("display", "none");
                $(".a0-success").css("display", "none");
                $(".a0-error").html(error).css("display", "");
                this.emit("_error", error)
            };
            Auth0Widget.prototype._showSuccess = function(message) {
                if (!message) return;
                $(".a0-header h1").css("display", "none");
                $(".a0-error").css("display", "none");
                $(".a0-success").html(message).css("display", "")
            };
            Auth0Widget.prototype._setTitle = function(title) {
                $(".a0-error").css("display", "none");
                $(".a0-success").css("display", "none");
                $("h1").html(title).css("display", "")
            };
            Auth0Widget.prototype._areThereAnySocialConn = function() {
                return !!_.findWhere(this._client.strategies, {
                    social: true
                })
            };
            Auth0Widget.prototype._areThereAnyEnterpriseOrDbConn = function() {
                return !!_.findWhere(this._client.strategies, {
                    social: false
                })
            };
            Auth0Widget.prototype._areThereAnyDbConn = function() {
                return !!_.findWhere(this._client.strategies, {
                    userAndPass: true
                })
            };
            Auth0Widget.prototype._isEnterpriseConnection = function(email, output) {
                var emailM = email_parser.exec(email.toLowerCase());
                if (!emailM) return false;
                var email_domain = emailM.slice(-2)[0];
                var conn = _.chain(this._client.strategies).where({
                    userAndPass: undefined
                }).pluck("connections").flatten().findWhere({
                    domain: email_domain
                }).value();
                if (conn && output) {
                    output.domain = conn.domain
                }
                return !!conn
            };
            Auth0Widget.prototype._getConfiguredStrategy = function(name) {
                return _.findWhere(this._client.strategies, {
                    name: name
                })
            };
            Auth0Widget.prototype._getStrategy = function(connName) {
                return _.chain(this._client.strategies).filter(function(s) {
                    return _.findWhere(s.connections, {
                        name: connName
                    })
                }).value()[0]
            };
            Auth0Widget.prototype._getAuth0Connection = function(userName) {
                if (this._signinOptions["userPwdConnectionName"]) {
                    return _.chain(this._auth0Strategies).pluck("connections").flatten().findWhere({
                        name: this._signinOptions["userPwdConnectionName"]
                    }).value()
                }
                var domain = userName && ~userName.indexOf("@") ? userName.split("@")[1] : "";
                if (userName && domain && this._client.strategies) {
                    var conn = _.chain(this._client.strategies).pluck("connections").flatten().findWhere({
                        domain: domain
                    }).value();
                    if (conn) {
                        return conn
                    }
                }
                var defaultStrategy = _.findWhere(this._auth0Strategies, {
                    name: "auth0"
                });
                defaultStrategy = defaultStrategy || (this._auth0Strategies.length > 0 ? this._auth0Strategies[0] : null);
                return defaultStrategy && defaultStrategy.connections.length > 0 ? defaultStrategy.connections[0] : null
            };
            Auth0Widget.prototype._showOrHidePassword = function() {
                var mailField = $(".a0-notloggedin .a0-email input");
                var pwdField = $(".a0-notloggedin .a0-password input").first();
                var isEnterpriseConnection = this._isEnterpriseConnection(mailField.val() || "");
                if (isEnterpriseConnection) {
                    pwdField.attr("disabled", true);
                    pwdField.removeAttr("required")
                } else {
                    pwdField.removeAttr("disabled");
                    pwdField.attr("required", true)
                }
            };
            Auth0Widget.prototype._hideSignIn = function(cb) {
                var self = this;
                this._currentPane = null;
                this._node = null;
                $("div.a0-overlay").removeClass("a0-active");
                setTimeout(function() {
                    $().removeClass("a0-mode-signin");
                    $().css("display", "none");
                    if (cb) cb();
                    self.emit("closed")
                }, 500);
                return self
            };
            Auth0Widget.prototype._getActiveLoginView = function() {
                var container = this._currentPane.hasClass("a0-loggedin") ? $(".a0-loggedin") : $(".a0-notloggedin");
                return container
            };
            Auth0Widget.prototype._showSignUpExperience = function() {
                signup.bind(this);
                this._setLoginView({
                    mode: "signup"
                })
            };
            Auth0Widget.prototype._showResetExperience = function() {
                reset.bind(this);
                this._setLoginView({
                    mode: "reset"
                })
            };
            Auth0Widget.prototype._showLoadingExperience = function() {
                if (this._openWith) {
                    return this._setLoginView({
                        mode: "loading",
                        title: this._openWith.toLowerCase()
                    })
                }
                this._setLoginView({
                    mode: "loading"
                })
            };
            Auth0Widget.prototype._transitionMode = function(options, callback) {
                var self = this;
                $(".a0-loading").removeClass("a0-with-message");
                if ((!self._currentPane || self._currentPane.hasClass("a0-loading")) && options.mode === "loading") {
                    self._setTitle(options.title ? this._dict.t(options.title + ":title") : this._dict.t("signin:title"));
                    self._currentPane = $(".a0-loading");
                    self.emit("transition_mode", "loading");
                    self.emit("loading_ready");
                    return callback(null, self._currentPane)
                }
                self._currentPane = self._currentPane || $(".a0-loading");
                options = options || {};
                var currentEmail = $(".a0-email input", self._currentPane).val();
                var mode = options.mode || null;
                var newPane, title;
                switch (mode) {
                    case null:
                        title = this._dict.t("signin:title");
                        newPane = $(options.isReturningUser ? ".a0-loggedin" : ".a0-notloggedin");
                        if (self._currentPane.hasClass("a0-reset") || self._currentPane.hasClass("a0-loading")) {
                            $(".a0-password input", newPane).val("")
                        }
                        break;
                    case "loading":
                        title = options.title ? this._dict.t(options.title + ":title") : this._dict.t("signin:title");
                        newPane = $(".a0-loading").first();
                        if (options.message) {
                            newPane.addClass("a0-with-message");
                            $(".a0-spin-message span", newPane).html(options.message.replace("-", " "))
                        }
                        break;
                    case "signup":
                    case "reset":
                        title = this._dict.t(options.mode + ":title");
                        newPane = $(".a0-" + options.mode).first();
                        $(".a0-email input", newPane).val(currentEmail || "");
                        break
                }
                if (!hasTransitions() || !hasTransitions($("#a0-onestep")[0])) {
                    self._setTitle(title);
                    self._currentPane.hide();
                    self._currentPane = newPane.show();
                    setTimeout(function() {
                        self.emit("transition_mode", mode || "signin");
                        self.emit((mode || "signin") + "_ready")
                    }, 0);
                    return callback(null, self._currentPane)
                }
                var pane_container = $(".a0-onestep");
                var original_height = pane_container.addClass("a0-disable-transition").css("height", "auto").dim().height;
                pane_container.css("min-height", original_height.toString() + "px");
                self._currentPane.css("position", "absolute").css("left", "-1000px");
                newPane.show().css("visibility", "hidden");
                pane_container.css("min-height", "");
                var new_height = pane_container.dim().height;
                pane_container.css("min-height", original_height.toString() + "px");
                newPane.css("visibility", "").hide();
                self._currentPane.css("position", "").css("left", "").show();
                pane_container.css("height", original_height.toString() + "px").css("min-height", "");
                setTimeout(function() {
                    pane_container.removeClass("a0-disable-transition");
                    setTimeout(function() {
                        if (!pane_container[0]) return;
                        transition_end.on(pane_container[0], function() {
                            if (!pane_container[0]) return;
                            transition_end.off(pane_container[0]);
                            self._setTitle(title);
                            self._currentPane.hide();
                            self._currentPane = newPane.show();
                            setTimeout(function() {
                                self.emit("transition_mode", mode || "signin");
                                self.emit((mode || "signin") + "_ready");
                                callback(null, self._currentPane)
                            }, 10)
                        });
                        pane_container.css("height", new_height.toString() + "px")
                    }, 10)
                }, 10)
            };
            Auth0Widget.prototype._setLoginView = function(options, callback) {
                var self = this;
                this._transitionMode(options, function(err, currentPane) {
                    if (!self._signinOptions._avoidInitialFocus) setfocus($("input", currentPane).first());
                    if (callback) callback()
                })
            };
            Auth0Widget.prototype._getLoggedInAuthParams = function(strategy, ssoData) {
                switch (strategy) {
                    case "google-oauth2":
                        return {
                            login_hint: ssoData.lastUsedUsername
                        };
                    default:
                        return {}
                }
            };
            Auth0Widget.prototype._showLoggedInExperience = function() {
                var self = this;
                var strategy_name = this._ssoData.lastUsedConnection.strategy;
                var strategy = this._strategies[strategy_name];
                if (!strategy) return;
                var loginView = $(".a0-loggedin");
                $("form", loginView).a0_on("submit", function(e) {
                    self._signInEnterprise(e)
                });
                var button = $.create(loggedinBtnTmpl({
                    name: strategy_name,
                    title: strategy.title,
                    css: strategy.css,
                    imageicon: strategy.imageicon,
                    username: this._ssoData.lastUsedUsername
                }));
                $(".a0-last-time").html(this._dict.t("signin:returnUserLabel"));
                $(".a0-strategy span", loginView).remove();
                $(".a0-strategy", loginView).append(button);
                $(".a0-strategy span", loginView).a0_on("click", function(e) {
                    e.preventDefault();
                    self._signInSocial(strategy_name, self._ssoData.lastUsedConnection && self._ssoData.lastUsedConnection.name, self._getLoggedInAuthParams(strategy_name, self._ssoData))
                });
                $(".a0-all", loginView).a0_on("click", function() {
                    self._setLoginView()
                });
                this._setLoginView({
                    isReturningUser: !! strategy
                })
            };
            Auth0Widget.prototype._showAdInDomainExperience = function() {
                var self = this;
                var connection = this._ssoData.connection;
                var strategy_name = this._ssoData.strategy;
                var strategy = this._strategies[strategy_name];
                if (!strategy) return;
                var loginView = $(".a0-loggedin");
                $("form", loginView).a0_on("submit", function(e) {
                    self._signInEnterprise(e)
                });
                var button = $.create(buttonTmpl({
                    use_big_buttons: true,
                    name: strategy_name,
                    title: this._dict.t("windowsAuthTitle").replace("{connection}", connection),
                    css: strategy.css,
                    imageicon: strategy.imageicon
                }));
                $(".a0-last-time").html(this._dict.t("signin:domainUserLabel"));
                $(".a0-strategy span", loginView).remove();
                $(".a0-strategy", loginView).append(button);
                $(".a0-strategy span", loginView).a0_on("click", function(e) {
                    e.preventDefault();
                    self._signInSocial(strategy_name, connection)
                });
                $(".a0-all", loginView).a0_on("click", function() {
                    self._setLoginView()
                });
                this._setLoginView({
                    isReturningUser: !! strategy
                })
            };
            Auth0Widget.prototype._signInSocial = function(e, connection, extraParams) {
                var target = e.target || e;
                var self = this;
                var strategyName = typeof target === "string" ? target : target.getAttribute("data-strategy");
                var strategy = this._getConfiguredStrategy(strategyName);
                var connection_name = connection || strategy.connections[0].name;
                if (strategy) {
                    var loginOptions = _.extend({}, {
                        connection: connection_name,
                        popup: self._signinOptions.popup,
                        popupOptions: self._signinOptions.popupOptions
                    }, self._signinOptions.extraParameters, extraParams);
                    this._auth0.login(loginOptions)
                }
            };
            Auth0Widget.prototype._signInEnterprise = function(e) {
                e.preventDefault();
                e.stopPropagation();
                var self = this;
                var container = this._getActiveLoginView();
                var form = $("form", container);
                var valid = true;
                var emailD = $(".a0-email", form);
                var email_input = $("input[name=email]", form);
                var email_parsed = email_parser.exec(email_input.val().toLowerCase());
                var email = null,
                    domain, connection;
                if (!this._ignoreEmailValidations(email_input)) {
                    if (/^\s*$/.test(email_input.val())) {
                        return this._showError(this._dict.t("signin:strategyEmailEmpty"))
                    }
                    if (!email_parsed) {
                        return this._showError(this._dict.t("signin:strategyEmailInvalid"))
                    }
                }
                var input_email_domain = email_parsed ? email_parsed.slice(-2)[0] : undefined;
                var conn_obj = _.chain(this._client.strategies).where({
                    userAndPass: undefined
                }).pluck("connections").flatten().findWhere({
                    domain: input_email_domain
                }).value();
                if (conn_obj) {
                    domain = conn_obj.domain;
                    email = email_input.val();
                    connection = conn_obj.name
                } else {
                    if (this._auth0Strategies.length > 0) {
                        return this._signInWithAuth0(email_input.val())
                    }
                    if (input_email_domain === "gmail.com") {
                        return this._signInSocial("google-oauth2")
                    }
                    this._showError(this._dict.t("signin:strategyDomainInvalid").replace("{domain}", input_email_domain))
                }
                valid &= !domain && !emailD.addClass("a0-invalid") || !! domain && !! emailD.removeClass("a0-invalid");
                if (valid) {
                    var loadingMessage = self._dict.t("signin:loadingMessage").replace("{connection}", connection);
                    this._setLoginView({
                        mode: "loading",
                        message: loadingMessage
                    }, function() {
                        var loginOptions = _.extend({}, {
                            connection: connection,
                            popup: self._signinOptions.popup,
                            popupOptions: self._signinOptions.popupOptions
                        }, self._signinOptions.extraParameters);
                        self._auth0.login(loginOptions)
                    })
                }
            };
            Auth0Widget.prototype._signInWithAuth0 = function(userName, signInPassword) {
                var self = this;
                var container = this._getActiveLoginView();
                var connection = this._getAuth0Connection(userName);
                var loginOptions = {
                    connection: connection.name,
                    username: connection.domain ? userName.replace("@" + connection.domain, "") : userName,
                    password: signInPassword || $(".a0-password input", container).val(),
                    popup: self._signinOptions.popup,
                    popupOptions: self._signinOptions.popupOptions
                };
                loginOptions = _.extend({}, loginOptions, self._signinOptions.extraParameters);
                var strategy = self._getStrategy(connection.name) || {};
                var loadingMessage = strategy.name !== "auth0" ? self._dict.t("signin:loadingMessage").replace("{connection}", connection.name) : "";
                if (self._signinOptions.popup) {
                    self._auth0.login(loginOptions, function(err) {
                        if (err) {
                            self._showError(err.status === 401 ? self._dict.t("signin:wrongEmailPasswordErrorText") : self._dict.t("signin:serverErrorText"))
                        }
                    })
                }
                this._setLoginView({
                    mode: "loading",
                    message: loadingMessage
                }, function() {
                    self._auth0.login(loginOptions, function(err) {
                        if (err) {
                            self._setLoginView({}, function() {
                                self._showError(err.status === 401 ? self._dict.t("signin:wrongEmailPasswordErrorText") : self._dict.t("signin:serverErrorText"))
                            })
                        }
                    })
                })
            };
            Auth0Widget.prototype._initialize = function(cb) {
                var self = this;
                $().addClass("a0-mode-signin");
                if (!self._client) {
                    var args = arguments;
                    var setClient = global.window.Auth0.setClient;
                    global.window.Auth0.setClient = function() {
                        setClient.apply(this, arguments);
                        self._initialize.apply(self, args)
                    };
                    return
                }
                $(".a0-onestep a.a0-close").a0_on("click", function() {
                    self._hideSignIn()
                });
                $(".a0-notloggedin form").a0_on("submit", function(e) {
                    self._signInEnterprise(e)
                });
                $("").a0_on("keyup", function(e) {
                    if ((e.which == 27 || e.keycode == 27) && !self._signinOptions.standalone) {
                        self._hideSignIn()
                    }
                });
                if (self._client.subscription && self._client.subscription !== "free") {
                    $(".a0-footer").addClass("a0-hide")
                }
                $(".a0-header a.a0-close").css("background-image", "url(" + self._signinOptions.cdn + "img/close.png)");
                var options = _.extend({}, this._signinOptions, this._signinOptions.resources);
                options["showEmail"] = typeof options["showEmail"] !== "undefined" ? options["showEmail"] : true;
                options["showPassword"] = typeof options["showPassword"] !== "undefined" ? options["showPassword"] : true;
                options["enableReturnUserExperience"] = typeof options["enableReturnUserExperience"] !== "undefined" ? options["enableReturnUserExperience"] : true;
                options["enableADRealmDiscovery"] = typeof options["enableADRealmDiscovery"] !== "undefined" ? options["enableADRealmDiscovery"] : true;
                this._signinOptions = options;
                $("div.a0-panel").removeClass("a0-active");
                $("div.a0-overlay").addClass("a0-active");
                $("div.a0-panel.a0-onestep").addClass("a0-active");
                if (self._signinOptions.container) {
                    $("div.a0-active").removeClass("a0-overlay")
                }
                $(".a0-popup h1").html(this._dict.t("signin:title"));
                $(".a0-popup .a0-invalid").removeClass("a0-invalid");
                $("div.a0-panel.a0-onestep h1").html(this._signinOptions["title"]);
                if (self._signinOptions.connections) {
                    self._client.strategies = _.chain(self._client.strategies).map(function(s) {
                        s.connections = _.filter(s.connections, function(c) {
                            return _.contains(self._signinOptions.connections, c.name)
                        });
                        return s
                    }).filter(function(s) {
                        return s.connections.length > 0
                    }).value()
                }
                for (var s = 0; s < self._client.strategies.length; s++) {
                    var strategy_name = self._client.strategies[s].name;
                    self._client.strategies[s] = _.extend({}, self._client.strategies[s], self._strategies[strategy_name])
                }
                self._auth0Strategies = _.chain(self._client.strategies).filter(function(s) {
                    return s.userAndPass && s.connections.length > 0
                }).value();
                var auth0Conn = this._getAuth0Connection() || {};
                if (self._openWith === "SignUp" && !auth0Conn.showSignup && !self._signinOptions.signupLink) self._openWith = null;
                if (self._openWith === "Reset" && !auth0Conn.showForgot && !self._signinOptions.forgotLink) self._openWith = null;
                self._showLoadingExperience();

                function finish(err, ssoData) {
                    self._ssoData = ssoData;
                    if (self._openWith) {
                        return self["_show" + self._openWith + "Experience"]()
                    }
                    self._resolveLoginView();
                    if (cb && typeof cb === "function") cb()
                }
                var is_any_ad = _.some(self._client.strategies, function(s) {
                    return (s.name === "ad" || s.name === "auth0-adldap") && s.connections.length > 0
                });
                if (this._signinOptions.enableReturnUserExperience === false && (!is_any_ad || self._openWith || this._signinOptions.enableADRealmDiscovery === false)) {
                    finish(null, {})
                } else {
                    self._auth0.getSSOData(is_any_ad, finish)
                }
            };
            Auth0Widget.prototype._resolveLoginView = function() {
                var self = this;
                var use_big_buttons = this._signinOptions["socialBigButtons"] || !this._areThereAnyEnterpriseOrDbConn();
                var list = $(".a0-notloggedin .a0-iconlist");
                var socialStrategies = _.chain(self._client.strategies).where({
                    social: true
                });
                if (self._signinOptions.connections) {
                    var connections = self._signinOptions.connections;
                    socialStrategies = socialStrategies.map(function(s) {
                        var n = connections.indexOf(s.connections[0].name);
                        connections[n] = "";
                        return [n, s]
                    }).sort().map(function(x) {
                        return x[1]
                    })
                }
                socialStrategies.map(function(s) {
                    return _.extend({}, s, {
                        use_big_buttons: use_big_buttons
                    })
                }).each(function(s) {
                    return list.append(buttonTmpl(s))
                });
                if (_.where(self._client.strategies, {
                    social: true
                }).length > 0) {
                    $(".a0-notloggedin .a0-separator, .a0-notloggedin .a0-iconlist").show()
                }
                $(".a0-notloggedin .a0-email input").a0_on("input", function(e) {
                    self._showOrHidePassword(e)
                });
                $("span", list).a0_on("click", function(e) {
                    self._signInSocial(e)
                });
                var auth0Conn = this._getAuth0Connection() || {};
                var actions = $.create(loginActionsTmpl({
                    showSignup: this._signinOptions.showSignup !== false && (auth0Conn && auth0Conn.showSignup || this._signinOptions.signupLink),
                    showForgot: this._signinOptions.showForgot !== false && (auth0Conn && auth0Conn.showForgot || this._signinOptions.forgotLink),
                    i18n: this._dict,
                    signupLink: this._signinOptions.signupLink,
                    forgotLink: this._signinOptions.forgotLink
                }));
                var auth0ConnStrategy = this._getStrategy(auth0Conn.name) || {};
                if (!this._signinOptions.username_style && (auth0ConnStrategy.name === "ad" || auth0ConnStrategy.name === "auth0-adldap")) {
                    this._signinOptions.username_style = "username"
                }
                if (this._signinOptions.username_style === "username") {
                    var placeholder = this._dict.t("signin:usernamePlaceholder");
                    $(".a0-notloggedin .a0-email input").attr("type", "text").attr("title", placeholder).attr("placeholder", placeholder);
                    $(".a0-notloggedin .a0-email label").text(placeholder)
                }
                $(".a0-db-actions").append(actions);
                var signup_btn = $(".a0-sign-up");
                if (!this._signinOptions.signupLink && signup_btn.length > 0) {
                    signup_btn.a0_on("click", function(e) {
                        self._showSignUpExperience(e)
                    })
                }
                if (!this._signinOptions.forgotLink) {
                    $(".a0-forgot-pass").a0_on("click", function(e) {
                        self._showResetExperience(e)
                    })
                }
                $(".a0-panel input").val("");
                $(".a0-panel .a0-signup .a0-email input").a0_on("input", function() {
                    var output = {};
                    if (self._isEnterpriseConnection(this.value, output)) {
                        var warningText = self._dict.t("signup:enterpriseEmailWarningText").replace(/{domain}/g, output.domain);
                        self._setCustomValidity(this, warningText)
                    } else {
                        self._setCustomValidity(this, "")
                    }
                });
                $(".a0-panel .a0-options .a0-cancel").a0_on("click", function() {
                    self._setLoginView()
                });
                var anyEnterpriseOrDbConnection = self._areThereAnyEnterpriseOrDbConn();
                var anySocialConnection = self._areThereAnySocialConn();
                var anyDbConnection = self._areThereAnyDbConn();
                $(".a0-panel .a0-email input").show(self._signinOptions.showEmail && anyEnterpriseOrDbConnection ? "" : "none");
                $(".a0-panel .a0-zocial.a0-primary").show(self._signinOptions.showEmail && anyEnterpriseOrDbConnection ? "" : "none");
                $(".a0-panel .a0-password").show(self._signinOptions.showEmail && self._signinOptions.showPassword && anyDbConnection ? "block" : "none");
                $(".a0-panel .a0-separator").show(self._signinOptions.showEmail && anyEnterpriseOrDbConnection && anySocialConnection ? "" : "none");
                if (is_small_screen()) {
                    var collapse_onfocus = require("./js/collapse_onfocus");
                    collapse_onfocus.hook($(".a0-notloggedin form input"), $(".a0-collapse-social"))
                }
                if (self._ssoData && self._ssoData.connection) {
                    self._showAdInDomainExperience();
                    return
                } else {
                    if (self._ssoData.sso && self._signinOptions["enableReturnUserExperience"]) {
                        self._showLoggedInExperience();
                        return
                    }
                }
                self._setLoginView({
                    isReturningUser: self._ssoData.sso && self._signinOptions["enableReturnUserExperience"] !== false
                })
            };
            Auth0Widget.prototype._getEmbededTemplate = function(signinOptions) {
                return signinOptions.chrome ? mainTmpl({
                    expand: true,
                    i18n: this._dict,
                    options: signinOptions,
                    alt_spinner: !has_animations() ? signinOptions.cdn + "img/ajax-loader.gif" : null
                }) : embTmpl({
                    embedded: true,
                    i18n: this._dict,
                    options: signinOptions,
                    alt_spinner: !has_animations() ? signinOptions.cdn + "img/ajax-loader.gif" : null
                })
            };
            Auth0Widget.prototype.getClient = function() {
                return this._auth0
            };
            Auth0Widget.prototype.parseHash = function(hash) {
                return this._auth0.parseHash(hash)
            };
            Auth0Widget.prototype.getProfile = function(token, callback) {
                this._auth0.getProfile(token, callback)
            };
            Auth0Widget.prototype.reset = function(signinOptions, callback) {
                this._openWith = "Reset";
                var self = this;
                $(function() {
                    self._show(signinOptions, callback)
                });
                return self
            };
            Auth0Widget.prototype.signup = function(signinOptions, callback) {
                this._openWith = "SignUp";
                var self = this;
                $(function() {
                    self._show(signinOptions, callback)
                });
                return self
            };
            Auth0Widget.prototype.show = Auth0Widget.prototype.signin = function(signinOptions, callback) {
                this._openWith = null;
                var self = this;
                $(function() {
                    self._show(signinOptions, callback)
                });
                return self
            };
            Auth0Widget.prototype._show = function(signinOptions, callback) {
                if (typeof signinOptions === "function") {
                    callback = signinOptions;
                    signinOptions = {}
                }
                var self = this;
                self._signinOptions = _.extend({}, self._options, signinOptions);
                var extra = utils.extract(self._signinOptions, ["state", "access_token", "scope", "protocol", "request_id"]);
                self._signinOptions.extraParameters = _.extend({}, extra, self._signinOptions.extraParameters);
                if (self._signinOptions.container) {
                    self._signinOptions.theme = "static";
                    self._signinOptions.standalone = true;
                    self._signinOptions.top = true;
                    var specifiedContainer = document.getElementById(self._signinOptions.container);
                    specifiedContainer.innerHTML = self._getEmbededTemplate(self._signinOptions)
                } else {
                    $().parent().remove();
                    var div = document.createElement("div");
                    div.innerHTML = mainTmpl({
                        i18n: this._dict,
                        options: self._signinOptions,
                        alt_spinner: !has_animations() ? self._signinOptions.cdn + "img/ajax-loader.gif" : null
                    });
                    document.body.appendChild(div);
                    if (!~$(".a0-overlay").css("background-image").indexOf("radial") && !~navigator.appVersion.indexOf("MSIE 10")) {
                        $(".a0-overlay").addClass("a0-ie8-overlay")
                    }
                }
                self._node = $()[0];
                if (placeholderSupported) {
                    $(".a0-sad-placeholder").remove()
                }
                self._initialize(callback);
                return self
            };
            Auth0Widget.prototype.logout = function(query) {
                this._auth0.logout(query)
            };
            module.exports = Auth0Widget
        }, {
            "../i18n": 7,
            "../lib/insert-css": 16,
            "./html/button.ejs": 45,
            "./html/loggedin_button.ejs": 46,
            "./html/login_actions.ejs": 47,
            "./html/main.ejs": 48,
            "./html/main_embedded.ejs": 49,
            "./js/bonzo_qwery": 51,
            "./js/collapse_onfocus": 52,
            "./js/is_small_screen": 53,
            "./js/strategies": 54,
            "./modes/reset": 55,
            "./modes/signup": 56,
            "./pf/Object.create": 57,
            "./pf/has_animations": 58,
            "./pf/placeholderSupported": 59,
            "./pf/transition_end": 60,
            "./pf/utils": 61,
            "auth0-js": 20,
            events: 37,
            "has-transitions": 41,
            underscore: 43
        }
    ],
    51: [
        function(require, module, exports) {
            var qwery = require("qwery");
            var bonzo = require("bonzo");
            var domready = require("domready");
            var bean = require("bean");
            bonzo.aug({
                a0_on: function(event, handler) {
                    return this.each(function(el) {
                        bean.on(el, event, handler)
                    })
                },
                a0_off: function(event, handler) {
                    return this.each(function(el) {
                        bean.off(el, event, handler)
                    })
                }
            });
            module.exports = function(selector, root) {
                if (typeof selector === "function") {
                    return domready(selector)
                }
                return bonzo(qwery("#a0-widget " + (selector || ""), root))
            };
            module.exports.create = function(html) {
                return bonzo.create(html)
            }
        }, {
            bean: 34,
            bonzo: 35,
            domready: 40,
            qwery: 42
        }
    ],
    52: [
        function(require, module, exports) {
            var $ = require("./bonzo_qwery");
            module.exports.hook = function(inputs, collapsible) {
                var timeoutId;

                function on_blur() {
                    timeoutId = setTimeout(function() {
                        collapsible.show();
                        $(".a0-header").show()
                    }, 5)
                }

                function on_focus() {
                    clearTimeout(timeoutId);
                    collapsible.hide();
                    $(".a0-header").hide()
                }
                inputs.a0_off("blur.collapse_onfocus").a0_on("blur.collapse_onfocus", on_blur).a0_off("focus.collapse_onfocus").a0_on("focus.collapse_onfocus", on_focus).a0_off("touchstart.ts_collapse_onfocus").a0_on("touchstart.ts_collapse_onfocus", function(e) {
                    setTimeout(function() {
                        e.target.focus()
                    }, 500)
                })
            }
        }, {
            "./bonzo_qwery": 51
        }
    ],
    53: [
        function(require, module, exports) {
            module.exports = function() {
                return window.matchMedia && !window.matchMedia("(min-width: 340px)").matches
            }
        }, {}
    ],
    54: [
        function(require, module, exports) {
            module.exports = {
                "google-openid": {
                    css: "google",
                    title: "Google OpenId",
                    social: true
                },
                "google-apps": {
                    css: "google",
                    title: "Google Apps",
                    social: false
                },
                "google-oauth2": {
                    css: "googleplus",
                    title: "Google",
                    social: true
                },
                facebook: {
                    css: "facebook",
                    title: "Facebook",
                    social: true
                },
                windowslive: {
                    css: "windows",
                    title: "Microsoft Account",
                    social: true
                },
                linkedin: {
                    css: "linkedin",
                    title: "LinkedIn",
                    social: true
                },
                github: {
                    css: "github",
                    title: "GitHub",
                    social: true
                },
                paypal: {
                    css: "paypal",
                    title: "PayPal",
                    social: true
                },
                twitter: {
                    css: "twitter",
                    title: "Twitter",
                    social: true
                },
                amazon: {
                    css: "amazon",
                    title: "Amazon",
                    social: true
                },
                vkontakte: {
                    css: "vk",
                    title: "vKontakte",
                    social: true
                },
                yandex: {
                    css: "yandex",
                    title: "Yandex",
                    social: true
                },
                office365: {
                    css: "office365",
                    title: "Office365",
                    social: false
                },
                waad: {
                    css: "waad",
                    title: "Windows Azure AD",
                    social: false
                },
                adfs: {
                    css: "windows",
                    title: "ADFS",
                    social: false
                },
                samlp: {
                    css: "guest",
                    title: "SAML",
                    social: false
                },
                pingfederate: {
                    css: "guest",
                    title: "Ping Federate",
                    social: false
                },
                ip: {
                    css: "guest",
                    title: "IP Address",
                    social: false
                },
                mscrm: {
                    css: "guest",
                    title: "Dynamics CRM",
                    social: false
                },
                ad: {
                    css: "windows",
                    title: "AD / LDAP",
                    social: false,
                    userAndPass: true
                },
                custom: {
                    css: "guest",
                    title: "Custom Auth",
                    social: false
                },
                auth0: {
                    css: "guest",
                    title: "Auth0",
                    social: false,
                    userAndPass: true
                },
                "auth0-adldap": {
                    css: "guest",
                    title: "AD/LDAP",
                    social: false,
                    userAndPass: true
                },
                thirtysevensignals: {
                    css: "thirtysevensignals",
                    title: "37 Signals",
                    social: true
                },
                box: {
                    css: "box",
                    title: "Box",
                    social: true,
                    imageicon: true
                },
                salesforce: {
                    css: "salesforce",
                    title: "Salesforce",
                    social: true
                },
                "salesforce-sandbox": {
                    css: "salesforce",
                    title: "Salesforce (sandbox)",
                    social: true
                },
                fitbit: {
                    css: "fitbit",
                    title: "Fitbit",
                    social: true
                },
                baidu: {
                    css: "baidu",
                    title: "Baidu",
                    social: true
                },
                renren: {
                    css: "renren",
                    title: "RenRen",
                    social: true
                },
                yahoo: {
                    css: "yahoo",
                    title: "Yahoo!",
                    social: true
                },
                aol: {
                    css: "aol",
                    title: "Aol",
                    social: true
                },
                yammer: {
                    css: "yammer",
                    title: "Yammer",
                    social: true
                },
                wordpress: {
                    css: "wordpress",
                    title: "Wordpress",
                    social: true
                },
                dwolla: {
                    css: "dwolla",
                    title: "Dwolla",
                    social: true
                },
                shopify: {
                    css: "shopify",
                    title: "Shopify",
                    social: true
                },
                miicard: {
                    css: "miicard",
                    title: "miiCard",
                    social: true
                },
                soundcloud: {
                    css: "soundcloud",
                    title: "Soundcloud",
                    social: true
                },
                ebay: {
                    css: "ebay",
                    title: "ebay",
                    social: true
                },
                evernote: {
                    css: "evernote",
                    title: "Evernote",
                    social: true
                },
                sharepoint: {
                    css: "sharepoint",
                    title: "SharePoint Apps",
                    social: false
                },
                weibo: {
                    css: "weibo",
                    title: "Weibo",
                    social: true
                },
                instagram: {
                    css: "instagram",
                    title: "Instagram",
                    social: true
                }
            }
        }, {}
    ],
    55: [
        function(require, module, exports) {
            var $ = require("../js/bonzo_qwery");
            var reset = module.exports;
            var is_small_screen = require("../js/is_small_screen");
            var collapse_onfocus = require("../js/collapse_onfocus");
            reset.submit = function(widget, connectionName, username, password) {
                var container = $(".a0-reset form");
                widget._setLoginView({
                    mode: "loading",
                    title: "reset"
                }, function() {
                    widget._auth0.changePassword({
                        connection: connectionName,
                        username: username,
                        password: password
                    }, function(err) {
                        if ($()[0] !== widget._node) {
                            return console.log && console.log("this password reset was triggered from another node instance", arguments)
                        }
                        $(".a0-password input", container).val("");
                        $(".a0-repeatPassword input", container).val("");
                        if (err) {
                            return widget._setLoginView({
                                mode: "reset"
                            }, function() {
                                widget._showError(err.status === 400 ? widget._dict.t("reset:userDoesNotExistErrorText") : widget._dict.t("reset:serverErrorText"))
                            })
                        }
                        $(".a0-email input", container).val("");
                        widget._setLoginView({}, function() {
                            widget._showSuccess(widget._dict.t("reset:successText"))
                        })
                    })
                })
            };
            reset.bind = function(widget) {
                $(".a0-reset .a0-options").show(widget._openWith ? "none" : "block");
                var form = $(".a0-reset form").a0_off("submit").a0_on("submit", function(e) {
                    e.preventDefault();
                    var username = $(".a0-email input", form).val();
                    var password = $(".a0-password input", form).val();
                    var connection = widget._getAuth0Connection();
                    reset.submit(widget, connection.name, username, password)
                });
                if (is_small_screen()) {
                    collapse_onfocus.hook($(".a0-reset form input"), $(".a0-collapse-reset"))
                }
                $(".a0-repeatPassword input", form).a0_off("input").a0_on("input", function() {
                    if ($(".a0-password input", form).val() != this.value) {
                        widget._setCustomValidity(this, widget._dict.t("reset:enterSamePasswordText"))
                    } else {
                        widget._setCustomValidity(this, "")
                    }
                })
            }
        }, {
            "../js/bonzo_qwery": 51,
            "../js/collapse_onfocus": 52,
            "../js/is_small_screen": 53
        }
    ],
    56: [
        function(require, module, exports) {
            var _ = require("underscore");
            var $ = require("../js/bonzo_qwery");
            var buttonTmpl = require("../html/button.ejs");
            var collapse_onfocus = require("../js/collapse_onfocus");
            var is_small_screen = require("../js/is_small_screen");
            var signup = module.exports;
            signup.submit = function(widget, connectionName, email, password) {
                widget._setLoginView({
                    mode: "loading",
                    title: "signup"
                }, function() {
                    widget._auth0.signup({
                        connection: connectionName,
                        username: email,
                        password: password,
                        auto_login: false
                    }, function(err) {
                        if ($()[0] !== widget._node) {
                            return console.log && console.log("this password reset was triggered from another node instance", arguments)
                        }
                        if (err) {
                            return widget._setLoginView({
                                mode: "signup"
                            }, function() {
                                widget._showError(err.status === 400 ? widget._dict.t("signup:userExistsErrorText") : widget._dict.t("signup:serverErrorText"))
                            })
                        }
                        return widget._signInWithAuth0(email, password)
                    })
                })
            };
            signup.bind = function(widget) {
                var list = $(".a0-signup .a0-iconlist").html("");
                $(".a0-signup .a0-options").show(widget._openWith ? "none" : "block");
                _.chain(widget._client.strategies).where({
                    social: true
                }).map(function(s) {
                    return _.extend({}, s, {
                        use_big_buttons: false
                    })
                }).each(function(s) {
                    return list.append(buttonTmpl(s))
                });
                if (_.where(widget._client.strategies, {
                    social: true
                }).length > 0) {
                    $(".a0-signup .a0-separator, .a0-signup .a0-iconlist").show()
                }
                $("span", list).a0_on("click", function(e) {
                    widget._signInSocial(e)
                });
                var form = $(".a0-signup form").a0_off("submit").a0_on("submit", function(e) {
                    e.preventDefault();
                    var connection = widget._getAuth0Connection();
                    var email = $(".a0-email input", form).val();
                    var password = $(".a0-password input", form).val();
                    signup.submit(widget, connection.name, email, password)
                });
                if (is_small_screen()) {
                    collapse_onfocus.hook($(".a0-signup form input"), $(".a0-collapse-social-signup"))
                }
                return signup
            }
        }, {
            "../html/button.ejs": 45,
            "../js/bonzo_qwery": 51,
            "../js/collapse_onfocus": 52,
            "../js/is_small_screen": 53,
            underscore: 43
        }
    ],
    57: [
        function(require, module, exports) {
            module.exports = Object.create || function() {
                function F() {}
                return function(o) {
                    if (arguments.length != 1) {
                        throw new Error("Object.create implementation only accepts one parameter.")
                    }
                    F.prototype = o;
                    return new F
                }
            }()
        }, {}
    ],
    58: [
        function(require, module, exports) {
            var _ = require("underscore");
            module.exports = function() {
                return _.chain(["Webkit", "Moz", "O", "ms", "Khtml", ""]).map(function(prefix) {
                    return prefix + "Animation"
                }).some(function(s) {
                    return typeof document.body.style[s] !== "undefined"
                })
            }
        }, {
            underscore: 43
        }
    ],
    59: [
        function(require, module, exports) {
            function placeholderIsSupported() {
                var test = document.createElement("input");
                return "placeholder" in test
            }
            module.exports = placeholderIsSupported()
        }, {}
    ],
    60: [
        function(require, module, exports) {
            var transitionendNames = ["transitionend", "webkitTransitionEnd", "MozTransitionEnd", "oTransitionEnd"];
            var bean = require("bean");
            module.exports.on = function(el, callback) {
                function subscribe(name) {
                    bean.on(el, name, function(e) {
                        callback(e)
                    })
                }
                for (var i = 0; i < transitionendNames.length; i++) {
                    subscribe(transitionendNames[i])
                }
            };
            module.exports.off = function(el) {
                function subscribe(name) {
                    bean.off(el, name)
                }
                for (var i = 0; i < transitionendNames.length; i++) {
                    subscribe(transitionendNames[i])
                }
            }
        }, {
            bean: 34
        }
    ],
    61: [
        function(require, module, exports) {
            var _ = require("underscore");
            module.exports = {
                parseUrl: function(url) {
                    var parser = document.createElement("a");
                    parser.href = url;
                    return parser
                },
                endsWith: function(str, suffix) {
                    return str.indexOf(suffix, str.length - suffix.length) !== -1
                },
                extract: function(obj, props) {
                    var pre = _.pick(obj, props);
                    return _.chain(_.pairs(pre)).filter(function(pair) {
                        return typeof pair[1] !== "undefined"
                    }).reduce(function(r, current) {
                        r[current[0]] = current[1];
                        return r
                    }, {}).value()
                }
            }
        }, {
            underscore: 43
        }
    ]
}, {}, [44]);