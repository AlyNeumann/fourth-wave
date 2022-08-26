import OnramperWidget from "@onramper/widget";
//lirabry not installing correctly - too many conflicts 

export default function WidgetContainer() {
    const apiKey = process.env.NEXT_PUBLIC_ON_RAMP_API_KEY
    const wallets = {
        BTC: { address: "btcAddr" },
        BNB: { address: "bnbAddress", memo: "cryptoTag" },
    };

    return (
        <div
            style={{
                width: "482px",
                height: "660px",
            }}
        >
            <OnramperWidget
                API_KEY={apiKey}
                color={defaultColor}
                fontFamily={fontFamily}
                defaultAddrs={wallets}
                defaultAmount={defaultAmount}
                defaultCrypto={defaultCrypto}
                defaultFiat={defaultFiat}
                defaultFiatSoft={defaultFiatSoft}
                defaultPaymentMethod={defaultPaymentMethod}
                filters={{
                    onlyCryptos: onlyCryptos,
                    excludeCryptos: excludeCryptos,
                    onlyPaymentMethods: onlyPaymentMethods,
                    excludePaymentMethods: excludePaymentMethods,
                    excludeFiat: excludeFiat,
                    onlyGateways: onlyGateways,
                    onlyFiat: onlyFiat,
                }}
                isAddressEditable={isAddressEditable}
                amountInCrypto={amountInCrypto}
                redirectURL={redirectURL}
                darkMode={darkMode}
            />
        </div>
    );
}