import 'package:flutter/material.dart';

import 'package:mobile/shared/theme/app_colors.dart';
import 'package:mobile/shared/theme/app_text_styles.dart';

class TileWidget extends StatelessWidget {
  
  final String title;
  final String? subtitle;
  final String? trailing;
  final VoidCallback onTap;

  const TileWidget({
    Key? key,
    required this.title,
    this.subtitle,
    this.trailing,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: AppColors.white,
          borderRadius: BorderRadius.circular(6),
          boxShadow: <BoxShadow>[
            BoxShadow(
              color: AppColors.shadow.withOpacity(0.2),
              offset: const Offset(1.1, 1.1),
              blurRadius: 8
            )
          ]
        ),
        child: Row(
          children: [
            Container(
              width: 8,
              height: 72,
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.horizontal(
                  left: Radius.circular(6)
                ),
                color: AppColors.primary,
              ),
            ),
            Expanded(
              child: ListTile(
                title: Text(
                  title,
                  style: AppTextStyles.listPrimary,
                ),
                subtitle: Text(
                  subtitle ?? '',
                  style: AppTextStyles.captionRegular,
                ),
                trailing: Text(
                  trailing ?? '',
                  style: AppTextStyles.trailingSecondary,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
