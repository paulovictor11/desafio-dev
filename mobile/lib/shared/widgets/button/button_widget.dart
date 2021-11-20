import 'package:flutter/material.dart';

class ButtonWidget extends StatelessWidget {
  
  final String? text;
  final TextStyle? textStyle;
  final double radius;
  final Color backgroundColor;
  final Widget? child;
  final VoidCallback? onTap;

  const ButtonWidget({
    Key? key,
    this.text,
    this.textStyle,
    required this.radius,
    required this.backgroundColor,
    this.child,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    _content() {
      return child == null
        ? Text(
            text!, style: textStyle,
            textAlign: TextAlign.center,
          )
        : Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: child,
        );
    }

    return TextButton(
      style: ButtonStyle(
        shape: MaterialStateProperty.all<RoundedRectangleBorder>(
          RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(radius)
          )
        ),
        backgroundColor: MaterialStateProperty.all<Color>(backgroundColor)
      ),
      onPressed: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: Center(
          child: _content(),
        ),
      ),
    );
  }
}
