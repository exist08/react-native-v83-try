import React from 'react'
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native'

// Define text variants with sizes and weights
type TextVariant = 
    | 'h1' 
    | 'h2' 
    | 'h3' 
    | 'h4' 
    | 'body' 
    | 'bodyLarge' 
    | 'bodySmall' 
    | 'caption' 
    | 'label'
    | 'button'
    | 'tag'
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

interface CustomTextProps extends TextProps {
    variant?: TextVariant
    weight?: FontWeight
    color?: string
    align?: 'left' | 'center' | 'right' | 'justify'
    italic?: boolean
    underline?: boolean
}

// Base Text Component with all customization options
export const CustomText = ({ 
    variant = 'body', 
    weight, 
    color, 
    align,
    italic,
    underline,
    style, 
    children, 
    ...props 
}: CustomTextProps) => {
    const variantStyle = styles[variant]
    
    const customStyle: TextStyle = {
        ...(weight && { fontWeight: weight }),
        ...(color && { color }),
        ...(align && { textAlign: align }),
        ...(italic && { fontStyle: 'italic' }),
        ...(underline && { textDecorationLine: 'underline' }),
    }

    return (
        <Text style={[variantStyle, customStyle, style]} {...props}>
            {children}
        </Text>
    )
}

// Predefined Text Components for easy use

// Heading 1 - Largest heading
export const H1 = ({ style, ...props }: TextProps) => (
    <CustomText variant="h1" style={style} {...props} />
)

// Heading 2
export const H2 = ({ style, ...props }: TextProps) => (
    <CustomText variant="h2" style={style} {...props} />
)

// Heading 3
export const H3 = ({ style, ...props }: TextProps) => (
    <CustomText variant="h3" style={style} {...props} />
)

// Heading 4 - Smallest heading
export const H4 = ({ style, ...props }: TextProps) => (
    <CustomText variant="h4" style={style} {...props} />
)

// Body Text - Default text
export const BodyText = ({ style, ...props }: TextProps) => (
    <CustomText variant="body" style={style} {...props} />
)

// Large Body Text
export const BodyLarge = ({ style, ...props }: TextProps) => (
    <CustomText variant="bodyLarge" style={style} {...props} />
)

// Small Body Text
export const BodySmall = ({ style, ...props }: TextProps) => (
    <CustomText variant="bodySmall" style={style} {...props} />
)

// Caption Text - For small, supplementary text
export const Caption = ({ style, ...props }: TextProps) => (
    <CustomText variant="caption" style={style} {...props} />
)

// Label Text - For form labels
export const Label = ({ style, ...props }: TextProps) => (
    <CustomText variant="label" style={style} {...props} />
)

// Button Text - For button labels
export const ButtonText = ({ style, ...props }: TextProps) => (
    <CustomText variant="button" style={style} {...props} />
)

// Tag Text - For tags
export const Tag = ({ children, style, ...props }: TextProps) => (
    <CustomText variant="tag" style={style} {...props}>
        <Text style={styles.tagText}>{children}</Text>
    </CustomText>
)

// Specialized variants with custom styling

// Bold variants
export const H1Bold = ({ style, ...props }: TextProps) => (
    <CustomText variant="h1" weight="bold" style={style} {...props} />
)

export const H2Bold = ({ style, ...props }: TextProps) => (
    <CustomText variant="h2" weight="bold" style={style} {...props} />
)

export const H3Bold = ({ style, ...props }: TextProps) => (
    <CustomText variant="h3" weight="bold" style={style} {...props} />
)

export const BodyBold = ({ style, ...props }: TextProps) => (
    <CustomText variant="body" weight="bold" style={style} {...props} />
)

// Light variants
export const H1Light = ({ style, ...props }: TextProps) => (
    <CustomText variant="h1" weight="300" style={style} {...props} />
)

export const H2Light = ({ style, ...props }: TextProps) => (
    <CustomText variant="h2" weight="300" style={style} {...props} />
)

export const BodyLight = ({ style, ...props }: TextProps) => (
    <CustomText variant="body" weight="300" style={style} {...props} />
)

// Semibold variants
export const H1SemiBold = ({ style, ...props }: TextProps) => (
    <CustomText variant="h1" weight="600" style={style} {...props} />
)

export const H2SemiBold = ({ style, ...props }: TextProps) => (
    <CustomText variant="h2" weight="600" style={style} {...props} />
)

export const BodySemiBold = ({ style, ...props }: TextProps) => (
    <CustomText variant="body" weight="600" style={style} {...props} />
)

const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
        color: 'white',
    },
    h2: {
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 36,
        color: 'white',
    },
    h3: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 32,
        color: 'white',
    },
    h4: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 28,
        color: 'white',
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: 'white',
    },
    bodyLarge: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 26,
        color: 'white',
    },
    bodySmall: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: 'white',
    },
    caption: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color: 'white',
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: 'white',
    },
    button: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        textTransform: 'uppercase',
        color: 'white',
    },
    tag: {
        fontSize: 11,
        fontWeight: '400',
        color: 'white',
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    tagText: {
        color: 'white',
    },
})
