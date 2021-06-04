export default {
    net: {
        test: {
            /**
             * Network URL without port.
             * Examples:
             *     'http://localhost'
             *     'http://0.0.0.0
             */
            url: 'https://net.ton.dev',

            /**
             * Network port.
             * Examples:
             *     '8080'
             *     '80'
             */
            port: '',

            /**
             * Version of test node. Actual for testing on local node. Run `tondev se version` to view options.
             * @see https://github.com/tonlabs/tondev
             * Examples:
             *     '0.27.2'
             *     'latest'
             */
            version: '0.27.2',

            /**
             * IMPORTANT!!!
             * Dont use default path. Store keys in encrypted directory or key storage.
             * For directory encryption on linux use CryFS or any other solution.
             */
            keys: {
                /**
                 * Absolute path to giver keys file.
                 * Examples:
                 *     __dirname + '/../library/keys/GiverV2.se.keys.json'
                 *     '/home/user/keys/GiverV2.keys.json'
                 */
                giver: __dirname + '/../library/keys/GiverV2.se.keys.json'
            },

            /**
             * How long to wait and result of call or deployment from local node in milliseconds
             * Examples:
             *     3000
             *     5000
             */
            timeout: 3000
        },
        deploy: {
            /**
             * Network URL without port.
             * Examples:
             *     'http://localhost'
             *     'http://0.0.0.0
             */
            url: 'https://net.ton.dev',

            /**
             * Network port.
             * Examples:
             *     '8080'
             *     '80'
             */
            port: '',

            /**
             * Giver and wallet keys
             *
             * IMPORTANT!!!
             * Dont use default path. Store keys in encrypted directory or key storage.
             * For directory encryption on linux use CryFS or any other solution.
             */
            keys: {
                /**
                 * Absolute path to giver keys file.
                 * Examples:
                 *     __dirname + '/../library/keys/GiverV2.se.keys.json'
                 *     '/home/user/keys/GiverV2.keys.json'
                 */
                giver: __dirname + '/../library/keys/GiverV2.se.keys.json',

                /**
                 * Absolute path to SafeMultisigWallet keys file.
                 * Examples:
                 *     __dirname + '/../keys/SafeMultisigWallet.keys.json'
                 *     '/home/user/keys/SafeMultisigWallet.keys.json'
                 */
                wallet: __dirname + '/../keys/SafeMultisigWallet.keys.json',
            },

            /**
             * Contracts key files and deployment parameters.
             */
            contracts: {
                artRoot: {
                    keyFile: __dirname + '/../keys/ArtRoot.keys.json',
                    giverDeposit: 100_000_000,

                    manager: '0:ea3bd7dede82374278c045193ff39894abea44ef1eae2a3cab85c6d07f406066',
                    creationMinValue: 200_000_000,
                    creationFee: 50_000_000,
                    name: 'Art',
                    symbol: 'ART'
                },
                auctionRoot: {
                    keyFile: __dirname + '/../keys/AuctionRoot.keys.json',
                    giverDeposit: 100_000_000,

                    manager: '0:ea3bd7dede82374278c045193ff39894abea44ef1eae2a3cab85c6d07f406066',
                    creationMinValue: 200_000_000,
                    creationFee: 50_000_000,
                    name: 'Auction',
                    symbol: 'AUCTION'
                },

                ticketRoot: {
                    keyFile: __dirname + '/../keys/AuctionRoot.keys.json',
                    giverDeposit: 100_000_000,

                    manager: '0:ea3bd7dede82374278c045193ff39894abea44ef1eae2a3cab85c6d07f406066',
                    creationMinValue: 100_000_000,
                    creationFee: 10_000_000,
                    limit: 100_000,
                    freezingTimeStart: 0,
                    freezingTimeEnd: 0,
                    name: 'Ticket',
                    symbol: 'TICKET'
                }
            },

            /**
             * How long to wait and result of call or deployment from local node in milliseconds
             * Examples:
             *     3000
             *     5000
             */
            timeout: 30000,

            /**
             * One or more BCP 47 extension sequences or `undefined`
             * Examples:
             *     'RU'
             *     'EN'
             */
            locale: undefined
        }
    }
}