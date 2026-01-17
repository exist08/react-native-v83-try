# Text Components

A comprehensive set of reusable, customizable text components for React Native with predefined sizes and weights.

## 📦 Installation

No installation needed! These components are part of the project.

## 🚀 Quick Start

### Basic Import

```tsx
// Import specific components
import { H1, H2, BodyText } from '@/components/ui'

// Or import from Texts file directly
import { H1, H2, BodyText } from '@/components/ui/Texts'
```

### Simple Usage

```tsx
<H1>My Heading</H1>
<H2>Subheading</H2>
<BodyText>This is body text</BodyText>
```

## 📚 Available Components

### Headings
| Component | Font Size | Weight | Line Height |
|-----------|-----------|--------|-------------|
| `H1` | 32px | 700 | 40px |
| `H2` | 28px | 600 | 36px |
| `H3` | 24px | 600 | 32px |
| `H4` | 20px | 600 | 28px |

### Body Text
| Component | Font Size | Weight | Line Height |
|-----------|-----------|--------|-------------|
| `BodyLarge` | 18px | 400 | 26px |
| `BodyText` | 16px | 400 | 24px |
| `BodySmall` | 14px | 400 | 20px |

### Specialized
| Component | Font Size | Weight | Line Height | Special |
|-----------|-----------|--------|-------------|---------|
| `Caption` | 12px | 400 | 16px | - |
| `Label` | 14px | 500 | 20px | - |
| `ButtonText` | 16px | 600 | 24px | UPPERCASE |

## 🎨 Customization

### Using CustomText

The `CustomText` component provides full customization control:

```tsx
<CustomText 
    variant="h2"           // Style variant
    weight="700"           // Font weight
    color="#FF6B6B"        // Text color
    align="center"         // Text alignment
    italic                 // Italic style
    underline              // Underline
    style={{ margin: 10 }} // Additional styles
>
    Custom Text
</CustomText>
```

### Props

```typescript
interface CustomTextProps extends TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodyLarge' | 'bodySmall' | 'caption' | 'label' | 'button'
    weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
    color?: string
    align?: 'left' | 'center' | 'right' | 'justify'
    italic?: boolean
    underline?: boolean
    // ... all standard React Native TextProps
}
```

## 💪 Weight Variants

Pre-built weight variants for quick use:

### Bold (700)
```tsx
<H1Bold>Bold Heading 1</H1Bold>
<H2Bold>Bold Heading 2</H2Bold>
<H3Bold>Bold Heading 3</H3Bold>
<BodyBold>Bold body text</BodyBold>
```

### Light (300)
```tsx
<H1Light>Light Heading 1</H1Light>
<H2Light>Light Heading 2</H2Light>
<BodyLight>Light body text</BodyLight>
```

### SemiBold (600)
```tsx
<H1SemiBold>SemiBold Heading 1</H1SemiBold>
<H2SemiBold>SemiBold Heading 2</H2SemiBold>
<BodySemiBold>SemiBold body text</BodySemiBold>
```

## 🎯 Usage Examples

### Example 1: Simple Heading

```tsx
<H1>Welcome to MarbleMaze</H1>
```

### Example 2: Colored Text

```tsx
<H2 style={{ color: '#4ECDC4' }}>
    Colored Heading
</H2>
```

### Example 3: Custom Alignment

```tsx
<CustomText variant="body" align="center" color="#666">
    Centered gray text
</CustomText>
```

### Example 4: With TextProps

```tsx
<BodyText 
    numberOfLines={2} 
    ellipsizeMode="tail"
    style={{ color: '#888' }}
>
    This long text will be truncated after two lines...
</BodyText>
```

### Example 5: Accessible Text

```tsx
<H1 
    accessible={true}
    accessibilityLabel="Page title"
>
    Accessible Heading
</H1>
```

### Example 6: Complex Custom Styling

```tsx
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
    Fully customized text
</CustomText>
```

## 🔄 Real-World Usage

### In a Card Component

```tsx
const PlaceCard = ({ title, description }) => (
    <View style={styles.card}>
        <H3>{title}</H3>
        <BodySmall style={{ color: '#666', marginTop: 8 }}>
            {description}
        </BodySmall>
    </View>
)
```

### In a Form

```tsx
<View>
    <Label>Email Address</Label>
    <TextInput style={styles.input} />
    <Caption style={{ color: '#999', marginTop: 4 }}>
        We'll never share your email
    </Caption>
</View>
```

### In a Button

```tsx
<TouchableOpacity style={styles.button}>
    <ButtonText style={{ color: '#fff' }}>
        Get Started
    </ButtonText>
</TouchableOpacity>
```

## 🎨 Theme Integration

You can easily integrate with your theme:

```tsx
import { colors } from '@/theme'

<H1 style={{ color: colors.primary }}>
    Themed Heading
</H1>

<CustomText variant="body" color={colors.text.secondary}>
    Themed body text
</CustomText>
```

## ✨ Best Practices

1. **Use semantic components**: Choose `H1`, `H2`, etc. for better code readability
2. **Consistent styling**: Use predefined variants before custom styling
3. **Accessibility**: Always add `accessibilityLabel` for important text
4. **Performance**: Style objects should be defined outside render when possible
5. **Customization**: Use `CustomText` when you need full control

## 🔧 Extending

To add new variants, edit `Texts.tsx`:

```tsx
// Add to styles
const styles = StyleSheet.create({
    // ... existing styles
    myCustomVariant: {
        fontSize: 22,
        fontWeight: '500',
        lineHeight: 30,
    },
})

// Add to type
type TextVariant = 
    | 'h1' 
    // ... existing variants
    | 'myCustomVariant'

// Create component
export const MyCustomText = ({ style, ...props }: TextProps) => (
    <CustomText variant="myCustomVariant" style={style} {...props} />
)
```

## 📝 Full Component List

```tsx
// Base
CustomText

// Headings
H1, H2, H3, H4

// Body
BodyText, BodyLarge, BodySmall

// Specialized
Caption, Label, ButtonText

// Bold variants
H1Bold, H2Bold, H3Bold, BodyBold

// Light variants
H1Light, H2Light, BodyLight

// SemiBold variants
H1SemiBold, H2SemiBold, BodySemiBold
```

## 🤝 Contributing

To add more text components or improve existing ones:

1. Edit `src/components/ui/Texts.tsx`
2. Update this README
3. Add examples to `Texts.example.tsx`
4. Test thoroughly

---

Made with ❤️ for MarbleMaze
