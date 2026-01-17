import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    CustomText,
    H1, H2, H3, H4,
    BodyText, BodyLarge, BodySmall,
    Caption, Label, ButtonText,
    H1Bold, H2Bold, BodyBold,
    H1Light, BodyLight,
    H1SemiBold, BodySemiBold
} from './Texts'

/**
 * Example Usage of Text Components
 * 
 * This file demonstrates all the ways you can use the custom text components
 */

const TextsExample = () => {
    return (
        <View style={styles.container}>
            {/* BASIC USAGE - Predefined variants */}
            <H1>This is a Heading 1</H1>
            <H2>This is a Heading 2</H2>
            <H3>This is a Heading 3</H3>
            <H4>This is a Heading 4</H4>
            
            <BodyText>This is body text</BodyText>
            <BodyLarge>This is large body text</BodyLarge>
            <BodySmall>This is small body text</BodySmall>
            
            <Caption>This is a caption</Caption>
            <Label>This is a label</Label>
            <ButtonText>Button Text</ButtonText>

            {/* WEIGHT VARIANTS - Bold, Light, SemiBold */}
            <H1Bold>Bold Heading 1</H1Bold>
            <H2Bold>Bold Heading 2</H2Bold>
            <BodyBold>Bold body text</BodyBold>
            
            <H1Light>Light Heading 1</H1Light>
            <BodyLight>Light body text</BodyLight>
            
            <H1SemiBold>SemiBold Heading 1</H1SemiBold>
            <BodySemiBold>SemiBold body text</BodySemiBold>

            {/* CUSTOM STYLING - Using CustomText for full control */}
            <CustomText 
                variant="h2" 
                color="#FF6B6B" 
                weight="700"
            >
                Custom colored heading
            </CustomText>

            <CustomText 
                variant="body" 
                color="#4ECDC4" 
                align="center"
                weight="500"
            >
                Centered body text with custom color
            </CustomText>

            <CustomText 
                variant="body" 
                italic 
                underline
            >
                Italic and underlined text
            </CustomText>

            {/* INLINE STYLES - Override defaults */}
            <H1 style={{ color: '#FFD93D', marginBottom: 20 }}>
                Heading with inline styles
            </H1>

            <BodyText style={{ color: '#6BCF7F', fontSize: 18 }}>
                Body text with custom color and size
            </BodyText>

            {/* COMBINING EVERYTHING */}
            <CustomText
                variant="h3"
                weight="600"
                color="#A463F2"
                align="center"
                style={{ 
                    marginVertical: 20, 
                    backgroundColor: '#F0F0F0',
                    padding: 10,
                    borderRadius: 8
                }}
            >
                Fully customized text component
            </CustomText>

            {/* WITH TEXT PROPS */}
            <BodyText 
                numberOfLines={2} 
                ellipsizeMode="tail"
                style={{ color: '#888' }}
            >
                This is a very long text that will be truncated after two lines. 
                It demonstrates how you can use all standard React Native Text props 
                with our custom components.
            </BodyText>

            {/* ACCESSIBLE TEXT */}
            <H2 
                accessible={true}
                accessibilityLabel="Welcome heading"
                style={{ color: '#333' }}
            >
                Accessible Heading
            </H2>
        </View>
    )
}

export default TextsExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 10,
    },
})

/**
 * QUICK REFERENCE GUIDE
 * 
 * Basic Components:
 * - H1, H2, H3, H4              → Headings (32px, 28px, 24px, 20px)
 * - BodyText                    → Default body text (16px)
 * - BodyLarge, BodySmall        → Large (18px) and small (14px) body text
 * - Caption                     → Small supplementary text (12px)
 * - Label                       → Form labels (14px, medium weight)
 * - ButtonText                  → Button labels (16px, semibold, uppercase)
 * 
 * Weight Variants:
 * - H1Bold, H2Bold, H3Bold, BodyBold       → Bold versions
 * - H1Light, H2Light, BodyLight            → Light versions (300)
 * - H1SemiBold, H2SemiBold, BodySemiBold  → SemiBold versions (600)
 * 
 * CustomText Props:
 * - variant    → Text style variant (h1, h2, body, etc.)
 * - weight     → Font weight (normal, bold, 100-900)
 * - color      → Text color
 * - align      → Text alignment (left, center, right, justify)
 * - italic     → Italic text
 * - underline  → Underlined text
 * - style      → Custom styles
 * - ...props   → All standard React Native TextProps
 * 
 * Examples:
 * 
 * 1. Simple usage:
 *    <H1>My Title</H1>
 * 
 * 2. With custom color:
 *    <H2 style={{ color: '#FF0000' }}>Red Heading</H2>
 * 
 * 3. Fully custom:
 *    <CustomText variant="body" color="#333" weight="600" align="center">
 *        Centered bold text
 *    </CustomText>
 * 
 * 4. With standard Text props:
 *    <BodyText numberOfLines={2} ellipsizeMode="tail">
 *        Long text...
 *    </BodyText>
 */
