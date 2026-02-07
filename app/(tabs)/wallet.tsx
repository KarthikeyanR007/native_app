import { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import WalletTop from "../../components/wallet/wallet-top";

export default function WalletScreen() {
  const [activeTab, setActiveTab] = useState<"cards" | "accounts">("cards");
  const insets = useSafeAreaInsets();
  const keyboardOffset = useMemo(() => insets.top + 64, [insets.top]);
  const isIOS = Platform.OS === "ios";

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={isIOS ? keyboardOffset : 0}
    >
      <WalletTop />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: 28 + insets.bottom + 120 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.sheet}>
          <View style={styles.segment}>
            <TouchableOpacity
              style={[
                styles.segmentButton,
                activeTab === "cards" && styles.segmentButtonActive,
              ]}
              onPress={() => setActiveTab("cards")}
              activeOpacity={0.9}
            >
              <Text
                style={[
                  styles.segmentText,
                  activeTab === "cards" && styles.segmentTextActive,
                ]}
              >
                Cards
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.segmentButton,
                activeTab === "accounts" && styles.segmentButtonActive,
              ]}
              onPress={() => setActiveTab("accounts")}
              activeOpacity={0.9}
            >
              <Text
                style={[
                  styles.segmentText,
                  activeTab === "accounts" && styles.segmentTextActive,
                ]}
              >
                Accounts
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === "cards" ? (
            <View style={styles.cardsPanel}>
              <View style={styles.cardPreview}>
                <View style={styles.cardCircleOne} />
                <View style={styles.cardCircleTwo} />
                <View style={styles.cardChip} />
                <Text style={styles.cardLabel}>Debit{"\n"}Card</Text>
                <Text style={styles.cardMono}>Mono</Text>
                <Text style={styles.cardNumber}>6219 8610 2888 8075</Text>
                <View style={styles.cardRow}>
                  <Text style={styles.cardName}>IRVAN MOSES</Text>
                  <Text style={styles.cardDate}>22/01</Text>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Add your debit Card</Text>
                <Text style={styles.sectionSubtitle}>
                  This card must be connected to a bank account under your name
                </Text>
              </View>

              <View style={styles.form}>
                <Text style={styles.inputLabel}>NAME ON CARD</Text>
                <TextInput
                  style={styles.input}
                  defaultValue="IRVAN MOSES"
                  placeholderTextColor="#AAB4B7"
                />
                <View style={styles.inputRow}>
                  <TextInput
                    style={[styles.input, styles.inputWide]}
                    placeholder="DEBIT CARD NUMBER"
                    placeholderTextColor="#AAB4B7"
                  />
                  <TextInput
                    style={[styles.input, styles.inputCompact]}
                    placeholder="CVC"
                    placeholderTextColor="#AAB4B7"
                  />
                </View>
                <View style={styles.inputRow}>
                  <TextInput
                    style={[styles.input, styles.inputWide]}
                    placeholder="EXPIRATION MM/YY"
                    placeholderTextColor="#AAB4B7"
                  />
                  <TextInput
                    style={[styles.input, styles.inputCompact]}
                    placeholder="ZIP"
                    placeholderTextColor="#AAB4B7"
                  />
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.accountsPanel}>
              <View style={styles.accountCard}>
                <View style={styles.accountIcon}>
                  <FontAwesome5 name="university" size={16} color="#2C7D78" />
                </View>
                <View style={styles.accountText}>
                  <Text style={styles.accountTitle}>Bank Link</Text>
                  <Text style={styles.accountSub}>
                    Connect your bank account to deposit & fund
                  </Text>
                </View>
                <Ionicons name="checkmark-circle" size={22} color="#2C7D78" />
              </View>

              <View style={styles.accountCard}>
                <View style={[styles.accountIcon, styles.accountIconMuted]}>
                  <MaterialCommunityIcons
                    name="cash"
                    size={16}
                    color="#9AA6A9"
                  />
                </View>
                <View style={styles.accountText}>
                  <Text style={styles.accountTitleMuted}>Microdeposits</Text>
                  <Text style={styles.accountSubMuted}>
                    Connect bank in 5-7 days
                  </Text>
                </View>
              </View>

              <View style={styles.accountCard}>
                <View style={[styles.accountIcon, styles.accountIconMuted]}>
                  <Ionicons name="logo-paypal" size={16} color="#9AA6A9" />
                </View>
                <View style={styles.accountText}>
                  <Text style={styles.accountTitleMuted}>Paypal</Text>
                  <Text style={styles.accountSubMuted}>
                    Connect your paypal account
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.nextButton} activeOpacity={0.9}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F1",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 28,
    marginTop: 10,
  },
  sheet: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 18,
    shadowColor: "#0B2F2D",
    shadowOpacity: 0.12,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  segment: {
    flexDirection: "row",
    backgroundColor: "#F0F3F3",
    borderRadius: 999,
    padding: 4,
    marginBottom: 18,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 999,
    alignItems: "center",
  },
  segmentButtonActive: {
    backgroundColor: "#fff",
    shadowColor: "#1A3937",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  segmentText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8A9698",
  },
  segmentTextActive: {
    color: "#1D2B2B",
  },
  cardsPanel: {
    gap: 16,
  },
  cardPreview: {
    backgroundColor: "#23A49C",
    borderRadius: 18,
    padding: 18,
    overflow: "hidden",
    minHeight: 150,
  },
  cardCircleOne: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255,255,255,0.14)",
    right: -30,
    top: -40,
  },
  cardCircleTwo: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    right: 10,
    bottom: -70,
  },
  cardChip: {
    width: 32,
    height: 24,
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,0.6)",
    marginBottom: 10,
  },
  cardLabel: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 12,
    lineHeight: 16,
  },
  cardMono: {
    position: "absolute",
    right: 18,
    top: 18,
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  cardNumber: {
    marginTop: 22,
    color: "#fff",
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: "600",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cardName: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1,
  },
  cardDate: {
    color: "#fff",
    fontSize: 12,
  },
  section: {
    gap: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1D2B2B",
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#738183",
    lineHeight: 16,
  },
  form: {
    gap: 10,
  },
  inputLabel: {
    fontSize: 11,
    letterSpacing: 0.6,
    color: "#7E8B8D",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D8E1E2",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 12,
    color: "#1D2B2B",
    backgroundColor: "#fff",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
  },
  inputWide: {
    flex: 1,
  },
  inputCompact: {
    width: 90,
  },
  accountsPanel: {
    gap: 14,
  },
  accountCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F7F7",
    borderRadius: 16,
    padding: 14,
    gap: 12,
  },
  accountIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E0F0EE",
    alignItems: "center",
    justifyContent: "center",
  },
  accountIconMuted: {
    backgroundColor: "#E9ECEC",
  },
  accountText: {
    flex: 1,
    gap: 4,
  },
  accountTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1D2B2B",
  },
  accountSub: {
    fontSize: 11,
    color: "#6E7C7D",
  },
  accountTitleMuted: {
    fontSize: 14,
    fontWeight: "700",
    color: "#7D888A",
  },
  accountSubMuted: {
    fontSize: 11,
    color: "#97A2A4",
  },
  nextButton: {
    marginTop: 6,
    borderWidth: 1.5,
    borderColor: "#2C7D78",
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
  },
  nextText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2C7D78",
  },
});
