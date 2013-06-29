/*global describe, it*/
var expect = require('expect.js');
var mario = require('../mario');

describe('mario', function () {
    describe('Desktop', function () {
        describe('Windows', function () {
            describe('Internet Explorer', function () {
                describe('version 7', function () {
                    var userAgentStrings = [
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; WOW64; Trident/6.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; McAfee; .NET CLR 3.0.30618)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; QQDownload 590; SE 2.X MetaSr 1.0)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; WOW64; Trident/6.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729;',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729;',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .N',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET4.0C)',
                        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727; .NET CLR 1.1.4322)'
                    ];

                    userAgentStrings.forEach(function (userAgentString) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                msie: true,
                                version: '7.0'
                            });
                        });
                    });
                });

                describe('version 8', function () {
                    var userAgentStrings = [
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; .NET CLR 3.5.30729)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.0.30618; .NET CLR 3.5.30729; BRI/2)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 1.1.4322; BOIE8;ENUS)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB6; .NET CLR 1.1.4322; Zango 10.3.75.0; InfoPath.1)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; BTRS124307)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media C',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; GTB7.2; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Medi',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; InfoPath.3;',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; QQBrowser/7.1.5753.400)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NE',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Win32)',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; .NET CLR 1.1.4322; .NET CLR',
                        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)'
                    ];

                    userAgentStrings.forEach(function (userAgentString) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                msie: true,
                                version: '8.0'
                            });
                        });
                    });
                });

                describe('version 9', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 7.1; Trident/5.0)',
                        'Mozilla/5.0 (MSIE 9.0; Windows NT 6.1; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; XBLWP7; ZuneWP7)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; abt)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; chromeframe/24.0.1312.57)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; WOW64; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Linux x86_64; Win64; IA64; Trident/2.0)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; BOIE9;ENUS)',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 2.0.50727; SLCC2; Media Center PC 6.0; .NET CLR 3.5.30729; .NET C',
                        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; WOW64; Trident/5.0)',
                        'Mozilla/4.0 (compatible; MSIE 9.0;IPMS/BD131796-150EE78D868-000000000000; Windows NT 6.1; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729;',
                        'Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))'
                    ];

                    userAgentStrings.forEach(function (userAgentString) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                msie: true,
                                version: '9.0'
                            });
                        });
                    });

                });

                describe('version 10', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; PPC; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Win64; x64; Trident/6.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0; MATMJS)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; MAAU; NP09)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)',
                        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; MASBJS)'
                    ];

                    userAgentStrings.forEach(function (userAgentString) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                msie: true,
                                version: '10.0'
                            });
                        });
                    });

                    describe('with touch', function () {
                        var userAgentStrings = [
                            'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0; Touch)',
                            'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)',
                            'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
                            'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0; Touch)'
                        ];

                        userAgentStrings.forEach(function (userAgentString) {
                            it('User Agent string: ' + userAgentString, function () {
                                var detected = mario(userAgentString);
                                expect(detected).to.eql({
                                    msie: true,
                                    touch: true,
                                    version: '10.0'
                                });
                            });
                        });
                    });
                });
            });

            describe('Firefox', function () {
                var userAgentStrings = [
                    'Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0',
                    'Mozilla/5.0 (Windows NT 5.1; rv:13.0) Gecko/20100101 Firefox/13.0.1',
                    'Mozilla/5.0 (Windows NT 5.1; rv:5.0.1) Gecko/20100101 Firefox/5.0.1',
                    'Mozilla/5.0 (Windows NT 6.1; rv:5.0) Gecko/20100101 Firefox/5.02',
                    'Mozilla/5.0 (Windows NT 6.1; rv:2.0b7pre) Gecko/20100921 Firefox/4.0b7pre',
                    'Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28',
                    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.28) Gecko/20120306 Firefox/3.6.28 ( .NET CLR 3.5.30729; .NET4.0C)',
                    'Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:6.0a2) Gecko/20110613 Firefox/6.0a2',
                    'Mozilla/5.0 (Windows NT 6.1; rv:10.0) Gecko/20100101 Firefox/10.0'
                ];

                var versions = ['18.0', '18.0', '5.0', '13.0', '5.0', '5.02', '4.0', '18.0', '18.0', '3.6', '3.6', '6.0', '10.0'];

                userAgentStrings.forEach(function (userAgentString, i) {
                    it('User Agent string: ' + userAgentString, function () {
                        var detected = mario(userAgentString);
                        expect(detected).to.eql({
                            firefox: true,
                            gecko: true,
                            mozilla: true,
                            version: versions[i]
                        });
                    });
                });

                it('User Agent string: Mozilla/5.0 (Android; Mobile; rv:18.0) Gecko/18.0 Firefox/18.0', function () {
                    var userAgentString = 'Mozilla/5.0 (Android; Mobile; rv:18.0) Gecko/18.0 Firefox/18.0';
                    var detected = mario(userAgentString);
                    expect(detected).to.eql({
                        firefox: true,
                        android: true,
                        gecko: true,
                        mozilla: true,
                        touch: true,
                        version: '18.0'
                    });
                });
            });

            describe('Safari', function () {
                var userAgentStrings = [
                    'Mozilla/5.0 (Windows; U; Windows NT 5.1; cs-CZ) AppleWebKit/523.15 (KHTML, like Gecko) Version/3.0 Safari/523.15',
                    'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.16',
                    'Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-HK) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5',
                    'Mozilla/5.0 (Windows; U; Windows NT 6.1; sv-SE) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4',
                    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27'
                ];

                var versions = ['3.0', '4.0', '5.0', '5.0', '5.0'];

                userAgentStrings.forEach(function (userAgentString, i) {
                    it('User Agent string: ' + userAgentString, function () {
                        var detected = mario(userAgentString);
                        var expected = {
                            safari: true,
                            webkit: true
                        };
                        if (versions[i]) {
                            expected.version = versions[i];
                        }

                        expect(detected).to.eql(expected);
                    });
                });
            });
        });

        describe('Mac OS', function () {
            describe('Firefox', function () {
                var userAgentStrings = [
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:18.0) Gecko/20100101 Firefox/18.0'
                ];
                userAgentStrings.forEach(function (userAgentString, i) {
                    it('User Agent string: ' + userAgentString, function () {
                        var detected = mario(userAgentString);
                        expect(detected).to.eql({
                            firefox: true,
                            gecko: true,
                            mozilla: true,
                            version: '18.0'
                        });
                    });
                });
            });

            describe('Safari', function () {
                var userAgentStrings = [
                    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; fi-fi) AppleWebKit/420+ (KHTML, like Gecko) Safari/419.3',
                    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/125.2 (KHTML, like Gecko) Safari/125.7',
                    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/312.8 (KHTML, like Gecko) Safari/312.6',
                    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_6; it-it) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.16',
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10',
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.17 (KHTML, like Gecko) Version/6.0.2 Safari/536.26.17'
                ];

                var versions = ['', '', '', '4.0', '5.1', '6.0'];

                userAgentStrings.forEach(function (userAgentString, i) {
                    it('User Agent string: ' + userAgentString, function () {
                        var detected = mario(userAgentString);
                        var expected = {
                            safari: true,
                            webkit: true
                        };
                        if (versions[i]) {
                            expected.version = versions[i];
                        }

                        expect(detected).to.eql(expected);
                    });
                });
            });
        });

        describe('Linux', function () {
            describe('Firefox', function () {
                var userAgentStrings = [
                    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (X11; Linux x86_64; rv:18.0) Gecko/20100101 Firefox/18.0',
                    'Mozilla/5.0 (X11; Linux i686; rv:18.0) Gecko/20100101 Firefox/18.0'
                ];
                userAgentStrings.forEach(function (userAgentString, i) {
                    it('User Agent string: ' + userAgentString, function () {
                        var detected = mario(userAgentString);
                        expect(detected).to.eql({
                            firefox: true,
                            gecko: true,
                            mozilla: true,
                            version: '18.0'
                        });
                    });
                });
            });
        });



    });

    describe('Mobile', function () {
        describe('Windows Phone', function () {
            describe('Internet Explorer 9', function () {
                var userAgentStrings = [
                    'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 800)',
                    'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 710)',
                    'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; PM23300)'
                ];

                userAgentStrings.forEach(function (userAgentString) {
                    it('User Agent string: ' + userAgentString, function () {
                        var detected = mario(userAgentString);
                        expect(detected).to.eql({
                            msie: true,
                            touch: true,
                            version: '9.0'
                        });
                    });
                });
            });

            describe('Internet Explorer 10', function () {
                var userAgentStrings = [
                    'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 820)',
                    'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)',
                    'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8X by HTC)',
                    'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; Microsoft; Virtual)'
                ];

                userAgentStrings.forEach(function (userAgentString) {
                    it('User Agent string: ' + userAgentString, function () {
                        var detected = mario(userAgentString);
                        expect(detected).to.eql({
                            msie: true,
                            touch: true,
                            version: '10.0'
                        });
                    });
                });
            });
        });

        describe('iPad', function () {
            describe('iOS 6', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPad; CPU OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B141 Safari/8536.25',
                        'Mozilla/5.0 (iPad; CPU OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B141',
                        'Mozilla/5.0 (iPad; CPU OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B141 AIRMobileSecureBrowser/1.0',
                        'Mozilla/5.0 (iPad; CPU OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25',
                        'Mozilla/5.0 (iPad; CPU OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A523',
                        'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25',
                        'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25',
                        'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25',
                        'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A407 Safari/8536.25'
                    ];

                    var versions = ['6.0', '', '', '6.0', '', '6.0', '6.0', '6.0', '6.0'];
                    var osversions = ['6.1', '6.1', '6.1', '6.0.1', '6.0.1', '6.0', '6.0', '6.0', '6.0'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                ipad: true,
                                ios: true,
                                touch: true,
                                webkit: true,
                                safari: true
                            };
                            if (versions[i]) {
                                expected.version = versions[i];
                            }
                            if (osversions[i]) {
                                expected.osversion = osversions[i];
                            }

                            expect(detected).to.eql(expected);
                        });
                    });
                });

                describe('running Chrome', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPad; CPU OS 6_1 like Mac OS X; en-us) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/23.0.1271.100 Mobile/10B141 Safari/8536.25',
                        'Mozilla/5.0 (iPad; CPU OS 6_1 like Mac OS X; en-gb) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/23.0.1271.100 Mobile/10B141 Safari/8536.25'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                ipad: true,
                                ios: true,
                                osversion: '6.1',
                                touch: true,
                                webkit: true,
                                chrome: true,
                                version: '23.0'
                            };

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });

            describe('iOS 5', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3',
                        'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3',
                        'Mozilla/5.0 (iPad; CPU iPhone OS 501 like Mac OS X) AppleWebKit/534.46 (KHTML like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3',
                        'Mozilla/5.0 (iPad; CPU OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3',
                        'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3'
                    ];

                    var osversions = ['5.1.1', '5.1', '501', '5.0.1', '5.0'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                ipad: true,
                                ios: true,
                                touch: true,
                                webkit: true,
                                safari: true,
                                version: '5.1'
                            };
                            if (osversions[i]) {
                                expected.osversion = osversions[i];
                            }

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });

            describe('iOS 4', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                ipad: true,
                                ios: true,
                                osversion: '4.3.3',
                                touch: true,
                                webkit: true,
                                safari: true,
                                version: '5.0'
                            };

                            expect(detected).to.eql(expected);
                        });
                    });
                });

                describe('running Chrome', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPad; U; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) CriOS/23.0.1271.100 Mobile/8L1 Safari/6533.18.5'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                ipad: true,
                                ios: true,
                                osversion: '4.3.5',
                                touch: true,
                                webkit: true,
                                chrome: true,
                                version: '23.0'
                            };

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });

            describe('iOS 3', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10',
                        'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
                    ];

                    var versions = ['4.0', '4.0'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                ipad: true,
                                ios: true,
                                osversion: '3.2',
                                touch: true,
                                webkit: true,
                                safari: true,
                                version: '4.0'
                            };

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });
        });

        describe('IPod touch', function () {
            var userAgentStrings = [
                'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
                'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_1 like Mac OS X; zh-cn) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8G4 Safari/6533.18.5',
                'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_2_1 like Mac OS X; he-il) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'
            ];

            var osversions = ['4.3.3', '4.3.1', '4.2.1'];

            userAgentStrings.forEach(function (userAgentString, i) {
                it('usage agent: ' + userAgentString, function () {
                    var detected = mario(userAgentString);
                    var expected = {
                        ipod: true,
                        ios: true,
                        touch: true,
                        webkit: true,
                        safari: true,
                        version: '5.0'
                    };
                    if (osversions[i]) {
                        expected.osversion = osversions[i];
                    }

                    expect(detected).to.eql(expected);
                });
            });
        });

        describe('iPhone', function () {
            describe('iOS 6', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B143 Safari/8536.25',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B142 Safari/8536.25',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B144 Safari/8536.25',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B141 Safari/8536.25',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_2 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A551 Safari/8536.25',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mercury/7.2 Mobile/10A523 Safari/8536.25',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25'
                    ];

                    var versions = ['6.0', '6.0', '6.0', '6.0', '6.0', '6.0', '', '6.0'];
                    var osversions = ['6.1', '6.1', '6.1', '6.1', '6.0.2', '6.0.1', '6.0.1', '6.0'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                iphone: true,
                                ios: true,
                                touch: true,
                                webkit: true,
                                safari: true
                            };
                            if (versions[i]) {
                                expected.version = versions[i];
                            }
                            if (osversions[i]) {
                                expected.osversion = osversions[i];
                            }

                            expect(detected).to.eql(expected);
                        });
                    });
                });

                describe('running Chrome', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X; en-us) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/23.0.1271.100 Mobile/10B143 Safari/8536.25'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                iphone: true,
                                ios: true,
                                osversion: '6.1',
                                touch: true,
                                webkit: true,
                                chrome: true,
                                version: '23.0'
                            };

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });

            describe('iOS 5', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B179 Safari/7534.48.3',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3',
                        'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
                        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X; en) AppleWebKit/528.18 (KHTML, like Gecko) Version/5.1 Mobile/7A341 Safari/528.16'
                    ];
                    var osversions = ['5.1.1', '5.1', '5.1', '5.0.1', '5.0', '5.0'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                iphone: true,
                                ios: true,
                                touch: true,
                                webkit: true,
                                safari: true,
                                version: '5.1'
                            };
                            if (osversions[i]) {
                                expected.osversion = osversions[i];
                            }

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });

            describe('iOS 4', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5',
                        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8F190',
                        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7'
                    ];

                    var versions = ['5.0', '', '4.0'];
                    var osversions = ['4.3.2', '4.3', '4.0'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                iphone: true,
                                ios: true,
                                touch: true,
                                webkit: true,
                                safari: true
                            };
                            if (versions[i]) {
                                expected.version = versions[i];
                            }
                            if (osversions[i]) {
                                expected.osversion = osversions[i];
                            }

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });

            describe('iOS 3', function () {
                describe('running Safari', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            var expected = {
                                iphone: true,
                                ios: true,
                                osversion: '3.0',
                                touch: true,
                                webkit: true,
                                safari: true,
                                version: '4.0'
                            };

                            expect(detected).to.eql(expected);
                        });
                    });
                });
            });
        });

        describe('Android', function () {
            describe('Jelly Bean', function () {
                describe('Default browser v4.0', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (Linux; U; Android 4.1.1; en-us; Nexus S Build/JRO03E) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
                        'Mozilla/5.0 (Linux; U; Android 4.1.2; en-gb; GT-I9300 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
                        'Mozilla/5.0 (Linux; U; Android 4.1.2; en-au; GT-N5100 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30'
                    ];
                    var osversions = ['4.1.1', '4.1.2', '4.1.2'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                version: '4.0',
                                android: true,
                                osversion: osversions[i],
                                touch: true,
                                webkit: true
                            });
                        });
                    });
                });

                describe('with Chrome', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (Linux; Android 4.2.1; Galaxy Nexus Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
                        'Mozilla/5.0 (Linux; Android 4.2.1; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
                        'Mozilla/5.0 (Linux; Android 4.2.1; Nexus 7 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
                        'Mozilla/5.0 (Linux; Android 4.2.1; Nexus 10 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
                        'Mozilla/5.0 (Linux; Android 4.1.2; GT-I9300 Build/JZO54K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
                        'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19'
                    ];
                    var osversions = ['4.2.1', '4.2.1', '4.2.1', '4.2.1', '4.1.2', '4.1.1'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                android: true,
                                osversion: osversions[i],
                                touch: true,
                                chrome: true,
                                webkit: true,
                                version: '18.0'
                            });
                        });
                    });
                });
            });

            describe('Ice Cream Sandwich', function () {
                describe('Default browser v4.0', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (Linux; U; Android 4.0.4; fr-fr; MIDC409 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
                        'Mozilla/5.0 (Linux; U; Android 4.0.3; fr-fr; MIDC410 Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
                        'Mozilla/5.0 (Linux; U; Android 4.0.3; ru-ru; Explay Surfer 7.02 Build/ICS.g12refM703A1HZ1.20121009) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0',
                        'Mozilla/5.0 (Linux; U; Android 4.0.3; es-es; MIDC410 Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
                        'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
                    ];
                    var osversions = ['4.0.4', '4.0.3', '4.0.3', '4.0.3', '4.0.2'];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                version: '4.0',
                                android: true,
                                osversion: osversions[i],
                                touch: true,
                                webkit: true
                            });
                        });
                    });
                });

                describe('Opera', function () {
                    var userAgentStrings = [
                        'Opera/9.80 (Android 4.0.4; Linux; Opera Mobi/ADR-1301080958) Presto/2.11.355 Version/12.10'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                android: true,
                                osversion: '4.0.4',
                                touch: true,
                                opera: true,
                                version: '12.10'
                            });
                        });
                    });
                });
            });

            describe('Older', function () {
                describe('Default browser v4.0', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Desire_A8181 Build/FRF91) AppleWebKit/53.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                version: '4.0',
                                android: true,
                                osversion: '2.2',
                                touch: true,
                                webkit: true
                            });
                        });
                    });
                    userAgentStrings = [
                        'MSM7627A/1.0 Android/2.3 gingerbread/2.3.5 Release/11.16.2011 Browser/WebKit533.1 Profile/MIDP-1.0 Configuration/CLDC-1.0'
                    ];
                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                android: true,
                                osversion: '2.3',
                                touch: true,
                                webkit: true
                            });
                        });
                    });
                });

                describe('Firefox', function () {
                    var userAgentStrings = [
                        'Mozilla/5.0 (Android; Mobile; rv:18.0) Gecko/18.0 Firefox/18.0',
                        'Mozilla/5.0 (Android; Tablet; rv:18.0) Gecko/18.0 Firefox/18.0'
                    ];

                    userAgentStrings.forEach(function (userAgentString, i) {
                        it('User Agent string: ' + userAgentString, function () {
                            var detected = mario(userAgentString);
                            expect(detected).to.eql({
                                android: true,
                                touch: true,
                                firefox: true,
                                mozilla: true,
                                gecko: true,
                                version: '18.0'
                            });
                        });
                    });
                });
            });
        });
    });
    describe('Bots', function () {
        var userAgentStrings = [
            'AdsBot-Google-Mobile (+http://www.google.com/mobile/adsbot.html) Mozilla (iPhone; U; CPU iPhone OS 3 0 like Mac OS X) AppleWebKit (KHTML, like Gecko) Mobile Safari'
        ];

        userAgentStrings.forEach(function (userAgentString) {
            it('User Agent string: ' + userAgentString, function () {
                var detected = mario(userAgentString);
                expect(detected).to.eql({
                    iphone: true,
                    ios: true,
                    osversion: '3.0',
                    touch: true,
                    webkit: true,
                    safari: true
                });
            });
        });
    });

    describe('with hand crafted evil input', function () {
        var userAgentStrings = [
            '(ipad;'
        ];

        userAgentStrings.forEach(function (userAgentString) {
            it('User Agent string: ' + userAgentString, function () {
                expect(function () {
                    mario(userAgentString);
                }).to.not.throwException();
            });
        });
    });
});
