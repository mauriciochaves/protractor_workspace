const HtmlReporter = require('../../index');

describe('unit tests', () => {

    describe('reporter', () => {
        describe('working scenarios', () => {

            it('minimal options do not crash report and set clientDefaults to empty object', () => {

                const options = {
                    baseDirectory: 'reports-tmp',
                    prepareAssets: false,
                    preserveDirectory: true
                };
                const reporter = new HtmlReporter(options);
                expect(reporter.clientDefaults).toBeDefined();
                expect(reporter["clientDefaults"]["searchSettings"]).toBeUndefined();
                expect(reporter["clientDefaults"]["columnSettings"]).toBeUndefined();
            });


            it('old searchSettings do not crash report and are merged to clientDefaults', () => {

                const options = {
                    baseDirectory: 'reports-tmp',
                    searchSettings: {
                        allselected: false,
                        passed: false,
                        failed: true,
                        pending: true,
                        withLog: true
                    },
                    prepareAssets: false,
                    preserveDirectory: true
                };
                const reporter = new HtmlReporter(options);
                expect(reporter["clientDefaults"]["searchSettings"]).toBeDefined();
                expect(reporter.clientDefaults.searchSettings.allselected).toEqual(false);
            });

            it('old columnSettings do not crash report and are merged to clientDefaults', () => {

                const options = {
                    baseDirectory: 'reports-tmp',
                    columnSettings: {
                        displayTime: true,
                        displayBrowser: false,
                        displaySessionId: false,
                        inlineScreenshots: false
                    },
                    prepareAssets: false,
                    preserveDirectory: true
                };
                const reporter = new HtmlReporter(options);
                expect(reporter["clientDefaults"]["columnSettings"]).toBeDefined();
                expect(reporter.clientDefaults.columnSettings.displayBrowser).toEqual(false);
            });

            it('old searchSettings and columnSettings do not crash report and are merged to clientDefaults', () => {

                const options = {
                    baseDirectory: 'reports-tmp',
                    searchSettings: {
                        allselected: false,
                        passed: false,
                        failed: true,
                        pending: true,
                        withLog: true
                    },

                    columnSettings: {
                        displayTime: true,
                        displayBrowser: false,
                        displaySessionId: false,
                        inlineScreenshots: false
                    },
                    prepareAssets: false,
                    preserveDirectory: true
                };
                const reporter = new HtmlReporter(options);
                expect(reporter["clientDefaults"]["searchSettings"]).toBeDefined();
                expect(reporter["clientDefaults"]["columnSettings"]).toBeDefined();
                expect(reporter.clientDefaults.searchSettings.allselected).toEqual(false);
                expect(reporter.clientDefaults.columnSettings.displayBrowser).toEqual(false);
            });

            it('new clientDefaults are transfered to reporter', () => {

                const options = {
                    baseDirectory: 'reports-tmp',
                    clientDefaults: {
                        searchSettings: {
                            allselected: false,
                            passed: false,
                            failed: true,
                            pending: false,
                            withLog: true
                        }, columnSettings: {
                            displayTime: true,
                            displayBrowser: true,
                            displaySessionId: false,
                            inlineScreenshots: false
                        }
                    },
                    prepareAssets: false,
                    preserveDirectory: true
                };
                const reporter = new HtmlReporter(options);
                expect(reporter["clientDefaults"]["searchSettings"]).toBeDefined();
                expect(reporter["clientDefaults"]["columnSettings"]).toBeDefined();
                expect(reporter.clientDefaults.searchSettings.pending).toEqual(false);
                expect(reporter.clientDefaults.columnSettings.displayBrowser).toEqual(true);
            });


        });
    });
});